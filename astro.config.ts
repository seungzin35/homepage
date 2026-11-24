import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 사이트맵 lastmod: 글은 frontmatter의 updateDate(없으면 publishDate)를 쓴다.
// 홈·글 목록·카테고리 페이지는 가장 최근 글 날짜. 날짜를 정확히 알 수 없는 페이지에는 넣지 않는다
// (부정확한 lastmod는 구글이 무시하게 되므로).
const postDates = (() => {
  const dir = path.resolve(__dirname, 'src/data/post');
  const map = new Map<string, Date>();
  for (const file of fs.readdirSync(dir)) {
    if (!/\.mdx?$/.test(file)) continue;
    const fm = fs.readFileSync(path.join(dir, file), 'utf8').split(/^---\s*$/m)[1] ?? '';
    const pick = (key: string) => fm.match(new RegExp(`^${key}:\\s*['"]?([^'"\\n]+)`, 'm'))?.[1];
    const raw = pick('updateDate') ?? pick('publishDate');
    const d = raw ? new Date(raw) : undefined;
    if (d && !isNaN(d.getTime())) map.set(file.replace(/\.mdx?$/, ''), d);
  }
  return map;
})();
const latestPostDate = () => {
  const now = Date.now();
  let max = 0;
  for (const d of postDates.values()) if (d.getTime() <= now && d.getTime() > max) max = d.getTime();
  return max ? new Date(max) : undefined;
};

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  // Prefetch links as they enter the viewport for snappier navigations
  // (works together with <ClientRouter />, which enables prefetch by default).
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  integrations: [
    // Leave out pages that carry noindex (tag pages, blog list page 2+), so the
    // sitemap only lists pages we want in search results.
    sitemap({
      filter: (page) => !/\/tag\//.test(page) && !/\/blog\/\d+\/?$/.test(page),
      serialize(item) {
        const p = new URL(item.url).pathname.replace(/\/+$/, '');
        const post = postDates.get(p.slice(1));
        const d = post ?? (p === '' || p === '/blog' || p.startsWith('/category/') ? latestPostDate() : undefined);
        if (d) item.lastmod = d.toISOString();
        return item;
      },
    }),
    mdx(),
    icon({
      // Local SVG icons (used as <Icon name="file-name" />) live next to the other assets.
      iconDir: 'src/assets/icons',
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      // csso off on purpose: its parser doesn't understand the media range
      // syntax Tailwind v4 emits for breakpoints (`@media (width>=48rem)`) and
      // silently drops every one of those blocks — the site then renders as if
      // all `md:`/`lg:` classes were missing. lightningcss parses it correctly.
      CSS: { csso: false, lightningcss: { minify: true } },
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    // Astro's default Sharp service handles local images.
    //
    // Most remote CDN images (Unsplash, Cloudinary, Imgix…) are routed by
    // src/components/common/Image.astro through `unpic`, which rewrites the
    // URL with CDN-side query parameters and serves it straight from the
    // provider — Astro never downloads it, so they don't need to be listed.
    //
    // `domains` only matters for remote URLs that fall through to Astro's
    // native <Image /> (i.e. providers Unpic can't detect, like Pixabay).
    // Listed entries are authorized to be processed by Sharp.
    // Unsplash is listed so post covers can be rendered as real 1200×626 Open Graph images.
    domains: ['cdn.pixabay.com', 'images.unsplash.com'],

    // Emit responsive styles for the native <Image layout=…> used by
    // src/components/common/Image.astro (local images). Utility classes on
    // each usage still win, since these styles use low-specificity selectors.
    responsiveStyles: true,
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
    shikiConfig: {
      // Code blocks follow the site theme; see the `.astro-code` rules in tailwind.css.
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
