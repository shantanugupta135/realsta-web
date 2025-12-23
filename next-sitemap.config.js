/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.realsta.com',
  generateRobotsTxt: false, // you already handle robots.txt
  sitemapSize: 5000,

  // We will split sitemaps manually
  generateIndexSitemap: true,

  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
  ],

  additionalPaths: async (config) => {
    const result = [];

    // Static pages
    const pages = [
      '/',
      '/about-us',
      '/our-services',
      '/contact-us',
      '/blog',
      '/properties',
    ];

    pages.forEach((url) => {
      result.push({
        loc: url,
        changefreq: 'weekly',
        priority: 0.8,
        sitemap: 'sitemap-pages.xml',
      });
    });

    // Properties (example – replace with API)
    const properties = await fetch (
      'https://realsta.com/get_properties.php'
    ).then(res => res.json());

    properties.forEach((item) => {
      result.push({
        loc: `/properties/${item.url}`,
        changefreq: 'daily',
        priority: 0.9,
        sitemap: 'sitemap-properties.xml',
      });
    });

    // Blog posts (example)
  try {
      const res = await fetch('https://www.realsta.com/api/get_data.php');
      const json = await res.json();

      // ✅ SAFETY CHECK
      const blogs = Array.isArray(json)
        ? json
        : Array.isArray(json?.data)
        ? json.data
        : [];

      blogs.forEach((blog) => {
        if (blog.blog_url) {
          result.push({
            loc: `/blog/${blog.blog_url}`,
            lastmod: new Date().toISOString(),
          });
        }
      });
    } catch (err) {
      console.error('❌ Sitemap blog fetch failed:', err);
    }
    return result;
  },
};
