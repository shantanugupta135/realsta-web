import type { MetadataRoute } from 'next';

<<<<<<< HEAD
=======
export const dynamic = 'force-static'

>>>>>>> 7c3b30b (initial commit)
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
