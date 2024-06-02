import fs from 'fs';
import { globby } from 'globby';

async function generateSitemap() {
  const pages = await globby([
    'pages/**/*{.js,.jsx,.ts,.tsx}',
    '!pages/_*.js',
    '!pages/api',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace(/(.tsx|.ts|.js|.jsx)/, '')
            .replace('/index', '');
          const route = path === '/index' ? '' : path;
          return `
            <url>
              <loc>${`https://tuo-dominio.com${route}`}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();

