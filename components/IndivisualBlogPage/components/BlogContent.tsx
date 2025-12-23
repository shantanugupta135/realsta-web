import React from "react";
import "./BlogContent.css";

interface BlogContentProps {
   content: string ;
} 

function BlogContent({data}:{ data : BlogContentProps}){

  // Ensure that data.content is sanitized or trusted to prevent XSS attacks
  // This is a simple example; in a real application, you should use a library like DOMPurify to sanitize HTML content
  if (!data || !data.content) {
    return null;
  }

  return (
    <div className="mt-4">
      <div
        className="blogContent"
        // new DOMParser().parseFromString(data.title, "text/html").documentElement.textContent
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  );
}

export default BlogContent