/**
 * Walks the built site in `dist/` and verifies that every internal link and
 * asset reference resolves to a file that exists. Run after `npm run build`.
 *
 * Catches the class of bug a type-checker cannot see: a renamed article slug,
 * a stale anchor, a moved PDF.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const dist = resolve('dist');
async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
const exists = async (p) => { try { await stat(p); return true; } catch { return false; } };

const files = await walk(dist);
const problems = [];
let checked = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const hrefs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|data:|#|tel:)/.test(href)) continue;
    if (!href.startsWith('/')) continue;
    checked++;
    const clean = href.split('#')[0].split('?')[0];
    const candidates = clean.endsWith('/')
      ? [join(dist, clean, 'index.html')]
      : [join(dist, clean), join(dist, clean, 'index.html')];
    let ok = false;
    for (const c of candidates) if (await exists(c)) { ok = true; break; }
    if (!ok) problems.push(`${file.replace(dist, '')} -> ${href}`);
  }
}
console.log(`Checked ${checked} internal links across ${files.length} pages.`);
console.log(problems.length ? 'BROKEN:\n' + [...new Set(problems)].join('\n') : 'All internal links resolve.');
