const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const pages = [
  '/',
  '/about-us',
  '/our-services',
  '/contact-us',
  '/blog',
  '/properties',
];

(async () => {
  const sm = new SitemapStream({ hostname: 'https://www.realsta.com' });

  pages.forEach(url => {
    sm.write({
      url,
      changefreq: 'weekly',
      priority: 0.8,
    });
  });

  sm.end();

  const data = await streamToPromise(sm);
  fs.writeFileSync('public/sitemap-pages.xml', data.toString());
})();
