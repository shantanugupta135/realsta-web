"use client";
import React,{ useEffect, useState } from "react";
import { useParams, useRouter } from 'next/navigation';

import BlogHeader from "./components/BlogHeader";
import BlogCategories from "./components/BlogCategories";
import BlogContent from "./components/BlogContent";
import RelatedBlogs from "./components/RelatedBlogs";
import NavigationMenu from "../NavigationMenu";
import ReadyToTalk from "../ReadyToTalk";
import { Col, Row } from "react-bootstrap";
import { fetchBlogsByCategory, fetchBlogByURL, Blog } from '../../services/blogService';
import './IndividualBlogPage.css'; 
import FloatingCallbackForm from "../floatingCallBackForm/FloatingCallbackForm";

function IndividualBlogPage({blogUrl}: {blogUrl?: string}) {
    // const id = Number(useParams<{ id: string }>().id);

    const url= blogUrl;
    const [categoryBlogs, setCategoryBlogs] = useState<Blog|null>(null)
        // {status:"fail",
        //     data:[{
        //          id: 1,
        //     catid: 1,
        //     blog_title: "10 Tips for a Healthier Lifestyle",
        //     blog_url: "https://www.example.com/10-tips-healthier-lifestyle",
        //     blog_img: "/assets//property-images/AIPLSignature.png", // <-- Corrected path
        //     short_desc: "Discover easy and effective ways to live a healthier life with these 10 tips.",
        //     blog_desc: "Living a healthy lifestyle doesn't require drastic changes. Start small with these simple yet effective tips that can make a huge difference in your overall well-being. From nutrition to exercise, find out how to improve your daily routine.",
        //     blog_author: "Jane Doe",
        //     blog_date: "2025-06-16",
        //     status: "published",
        //     seo_title: "10 Tips for a Healthier Lifestyle - Simple Ways to Improve Your Health",
        //     seo_desc: "Learn 10 easy tips that will help you live a healthier life. Improve your diet, exercise routine, and overall well-being with these simple steps."
        //     }]});

    const [blogHeaderData, setBlogHeaderData] = useState<BlogHeaderProps | null>(null);
    const [blogContentData, setBlogContentData] = useState<BlogContentProps | null>(null);
    const [blogimage,setBlogImage]= useState<string|null>(null);
    const [blogSEOTitle,setBlogSEOTitle]=useState<string|null>(null);
    const [blogSEODescription,setBlogSEODescription]=useState<string|null>(null);
    // let blogId = 1; // Replace with your blog ID
    // let categoryId = 2; // Replace with your category ID
     const navigate = useRouter();
    useEffect(() => {
        // fetchBlogByUrl(url).then(data=>{
        if (!url) return;
        fetchBlogByURL(url).then(data=>{
            if (data && data?.status === "success") {
                setBlogSEOTitle(data.data.seo_title||null)
                setBlogSEODescription(data.data.seo_desc||null)
          setBlogHeaderData({
            url: data.data.blog_url ||"",
            // id: data.data.id || 0,
            title: data.data.blog_title || 'Loading...',
            category: data.data.catid || 1,
            date: data.data.blog_date || 'Unknown Date'
          });   
          setBlogContentData({
            content:data.data.blog_desc || "Loading content...",
          })
          setBlogImage(data.data.blog_img||null)
        fetchBlogsByCategory(15, 0, data?.data?.catid).then(data=>{
             setCategoryBlogs(data)
            //  const blogData = blog?.data?.[0];
        
          
        })    
        }
            else{
                navigate.push('*')
            }
            
            // (setCategoryBlogs);
        })
    }, [navigate,url]);

    interface BlogHeaderProps{
        // id: number;
        url:string
        title: string;
        category: number;
        date: string;
    }
    interface BlogContentProps {
        content: string;    
    }
// const blogHeaderData: BlogHeaderProps = {
//         id:blog && blog?.data[0]?.id || 0,
//         title:blog && blog?.data[0]?.blog_title || "Loading...",
//         category:blog && blog?.data[0]?.catid || 1,
//         date:blog && blog?.data[0]?.blog_date || "Unknown Date"
//     }

// const blogContentData: BlogContentProps = {
//         content:blog && blog?.data[0].blog_desc || "Loading content...",
    // };
    return(
        <>
        {/* <Head>
            {blogSEOTitle && <title>{`${new DOMParser().parseFromString(blogSEOTitle, "text/html").documentElement.textContent}`}</title>} 
            {blogSEODescription && <meta name="description" content={`${new DOMParser().parseFromString(blogSEODescription, "text/html").documentElement.textContent}`} />}
            {blogHeaderData?.url &&<link  rel="canonical" href={`https://realsta.com/blog/${blogHeaderData?.url}`}/>}
        </Head> */}

        <div className="blogPage">
            <div className="pt-5">
                <NavigationMenu/>
             </div>
            <div className="blogBackgroundSection">
            
            {blogHeaderData &&<BlogHeader data={blogHeaderData} />}
            <div className="customContainer">            
            <Row>
                <Col md={9} sm={12}>
                   {blogimage && <img loading="lazy" src={blogimage || "/assets/defaultBlogImage.webp"} alt="Blog" className="img-fluid blogimage"/>}
                   {blogContentData && <BlogContent data={blogContentData}/>}
                </Col>
                <Col md={3} sm={10} className="p-0">
                    <BlogCategories/>
                </Col>
                
            </Row>
            {/* <Row>
                <Col md={9} sm={12}>
                {blogContentData && <BlogContent data={blogContentData}/>}
                </Col>
            </Row> */}
            </div>
            </div>
            </div>
            {categoryBlogs && url &&<RelatedBlogs data={categoryBlogs} url={url}/>}
             <FloatingCallbackForm/>
            <ReadyToTalk/>

        </>
    )
}

export default IndividualBlogPage