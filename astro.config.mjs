// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * GitHub Pages user site -> served from the domain root.
 * Everything is prerendered at build time: no server, no runtime data access.
 */
export default defineConfig({
  site: 'https://arix-alimagnidokpo.github.io',
  base: '/',
  trailingSlash: 'always',
  output: 'static',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', fr: 'fr-FR' },
      },
    }),
  ],

  build: {
    // Keep every stylesheet external so the CSP never needs `unsafe-inline`.
    inlineStylesheets: 'never',
    format: 'directory',
  },

  vite: {
    build: {
      // Vite inlines small assets as `data:` URIs. For fonts that would need
      // `data:` in font-src, so small font subsets stay real files instead.
      assetsInlineLimit: (filePath) => (/\.(woff2?|ttf|otf|eot)$/i.test(filePath) ? false : undefined),
    },
  },

  security: {
    // Astro emits a <meta http-equiv="content-security-policy"> with SHA-256
    // hashes for every script/style it generates. We only widen it where the
    // page genuinely needs it -- which, for this site, is nowhere.
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'none'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "manifest-src 'self'",
        "base-uri 'none'",
        "form-action 'none'",
        // `frame-ancestors` is deliberately absent: a <meta> CSP cannot enforce
        // it, and browsers log a warning for it. It needs a response header,
        // which GitHub Pages does not let us set.
        "object-src 'none'",
        "worker-src 'none'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: { resources: ["'self'"] },
      styleDirective: { resources: ["'self'"] },
    },
  },

  image: {
    // No remote images: nothing third-party is ever fetched at build or runtime.
    remotePatterns: [],
  },

  markdown: {
    // Prism emits classes; Shiki emits inline style attributes, which would
    // force `unsafe-inline` into style-src. Colours live in global.css instead.
    syntaxHighlight: 'prism',
  },

  devToolbar: { enabled: false },
});
