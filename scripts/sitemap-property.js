const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

(async () => {
  const sm = new SitemapStream({ hostname: 'https://www.realsta.com' });

  const properties = await fetch(
    'https://api.realsta.com/get_properties.php'
  ).then(res => res.json());

  properties.forEach(item => {
    if (item.url) {
      sm.write({
        url: `/properties/${item.url}`,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    }
  });

  sm.end();

  const data = await streamToPromise(sm);
  fs.writeFileSync('public/property/sitemap.xml', data.toString());
})();
