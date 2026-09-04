/**
 * Publishes `dist/` straight to the `gh-pages` branch, without GitHub Actions.
 *
 * This is the fallback path used while the GitHub account cannot run Actions
 * (a locked account, an expired plan). The normal route is
 * `.github/workflows/deploy.yml`; see the README for switching back.
 *
 * Usage:  npm run build && npm run deploy:manual
 */
import { execFileSync } from 'node:child_process';
import { cp, mkdtemp, readdir, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const BRANCH = 'gh-pages';
const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');

const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: 'pipe' }).trim();

try {
  await stat(join(dist, 'index.html'));
} catch {
  console.error('No dist/index.html found. Run `npm run build` first.');
  process.exit(1);
}

// Refuse to publish a build that Jekyll would mangle: it strips `_astro/`.
try {
  await stat(join(dist, '.nojekyll'));
} catch {
  console.error('dist/.nojekyll is missing — GitHub Pages would drop the _astro/ folder.');
  process.exit(1);
}

const sha = git('rev-parse', '--short', 'HEAD');
const worktree = await mkdtemp(join(tmpdir(), 'ghp-'));

console.log(`Publishing dist/ to ${BRANCH} (source ${sha})`);

try {
  git('worktree', 'add', '--force', worktree, BRANCH);

  // Clear the branch, keeping only its .git link file.
  for (const entry of await readdir(worktree)) {
    if (entry === '.git') continue;
    await rm(join(worktree, entry), { recursive: true, force: true });
  }

  await cp(dist, worktree, { recursive: true });

  execFileSync('git', ['add', '--all'], { cwd: worktree, stdio: 'inherit' });

  const status = execFileSync('git', ['status', '--porcelain'], { cwd: worktree, encoding: 'utf8' });
  if (status.trim() === '') {
    console.log('Nothing changed — the published site already matches this build.');
  } else {
    execFileSync('git', ['commit', '-m', `Deploy site from ${sha}`], { cwd: worktree, stdio: 'inherit' });
    execFileSync('git', ['push', 'origin', BRANCH], { cwd: worktree, stdio: 'inherit' });
    console.log('Pushed. GitHub Pages usually serves the new build within a minute.');
  }
} finally {
  git('worktree', 'remove', '--force', worktree);
}
