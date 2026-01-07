const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

(async () => {
  const sm = new SitemapStream({ hostname: 'https://www.realsta.com' });

  const res = await fetch('https://api.realsta.com/api/get_data.php');
  const json = await res.json();
  const blogs = Array.isArray(json?.data) ? json.data : [];

  blogs.forEach(blog => {
    if (blog.blog_url) {
      sm.write({
        url: `/blog/${blog.blog_url}`,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    }
  });

  sm.end();

  const data = await streamToPromise(sm);
  fs.writeFileSync('public/blog/sitemap.xml', data.toString());
})();
