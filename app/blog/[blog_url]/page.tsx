import IndividualBlogPage from "@/components/IndivisualBlogPage/IndivisualBlogPage";
import { fetchBlogByURL } from "@/services/blogService";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

interface PageProps {
  params: Promise<{
    blog_url: string;
  }>;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { blog_url } = await params;

  const blog = await fetchBlogByURL(blog_url);
   if (!blog) {
    return {
      title: "Blog not found",
    };
   }

  return {
    title: blog.data.seo_title || blog.data.blog_title,
    description: blog.data.seo_desc,
    alternates: {
      canonical: `https://www.realsta.com/blog/${blog_url}`,
    },
     openGraph: {
      title: blog.data.seo_title || blog.data.blog_title,
      description: blog.data.seo_desc,
      url: `https://www.realsta.com/blog/${blog_url}`,
      type: "article",
      images: [
        {
          url: blog.data.blog_img || "https://www.realsta.com/og/home.png",
          width: 1200,
          height: 630,
          alt: blog.data.seo_title || blog.data.blog_title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.data.seo_title || blog.data.blog_title,
      description: blog.data.seo_desc,
      images: [blog.data.blog_img || "https://www.realsta.com/og/home.png"],
    }
  };
}


export default async function Page({ params }: PageProps) {
  const { blog_url } = await params;

  return(
  <>
  <IndividualBlogPage blogUrl={blog_url}/>
  </>
);
}
