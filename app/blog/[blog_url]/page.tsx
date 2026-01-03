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
   if(!blog){
    return {
      title: "Blog not found",
    };
   }

  return {
    title: blog.data.seo_title || blog.data.blog_title,
    description: blog.data.seo_desc,
    alternates: {
      canonical: `https://realsta.com/blog/${blog_url}`,
    },
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
