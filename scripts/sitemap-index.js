const fs = require('fs');

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.realsta.com/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.realsta.com/blog/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.realsta.com/property/sitemap.xml</loc>
  </sitemap>
</sitemapindex>`;

fs.writeFileSync('public/sitemap.xml', index);
