import React from "react";
import { BlogCategory } from "../../../services/blogService";
import Link from "next/link";
import "./BlogCategories.css";

function BlogCategories() {


    return (
        <div className="categoryContainer">
            <h3 className="categoryHeading mb-3">CATEGORY</h3>

            {Object.entries(BlogCategory)
                .filter(([key, value]) => !isNaN(Number(value)))
                .map(([label, value]) => (
                    <div key={value} className="mt-3">
                        {/* <Link href={`/blogs`} state={{catId:Number(value)}}className="categoryLinks">{label}</Link> */}
                        <Link href={`/blogs?catId=${Number(value)}`} className="categoryLinks">
                            {label}
                        </Link>
                    </div>
                ))}

        </div>)
}

export default BlogCategories