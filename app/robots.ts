import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/*?search=',
          '/*?sort=',
          '/*?filter=',
        ],
      },
    ],
    sitemap: 'https://www.realsta.com/sitemap.xml',
  };
}
