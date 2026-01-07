/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.realsta.com',
  generateRobotsTxt: false,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  autoLastmod: true,
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
  ],

  additionalPaths: async () => {
    const result = [];

    /* ===============================
       1️⃣ STATIC PAGES
    =============================== */
    const staticPages = [
      '/',
      '/about-us',
      '/our-services',
      '/contact-us',
      '/blog',
      '/properties',
    ];

    staticPages.forEach((url) => {
      result.push({
        loc: url,
        changefreq: 'weekly',
        priority: 0.8,
        sitemap: 'sitemap-pages.xml',
      });
    });

    /* ===============================
       2️⃣ PROPERTY PAGES
    =============================== */
    try {
      const properties = await fetch(
        'https://api.realsta.com/get_properties.php'
      ).then(res => res.json());

      properties.forEach((item) => {
        if (item.url) {
          result.push({
            loc: `/properties/${item.url}`,
            changefreq: 'daily',
            priority: 0.9,
            sitemap: 'property-sitemap.xml',
          });
        }
      });
    } catch (e) {
      console.error('❌ Property sitemap error', e);
    }

    /* ===============================
       3️⃣ BLOG PAGES
    =============================== */
    try {
      const res = await fetch('https://api.realsta.com/api/get_data.php');
      const json = await res.json();

      const blogs = Array.isArray(json?.data) ? json.data : [];

      blogs.forEach((blog) => {
        if (blog.blog_url) {
          result.push({
            loc: `/blog/${blog.blog_url}`,
            lastmod: new Date().toISOString(),
            sitemap: 'blog-sitemap.xml',
          });
        }
      });
    } catch (e) {
      console.error('❌ Blog sitemap error', e);
    }

    return result;
  },
};
