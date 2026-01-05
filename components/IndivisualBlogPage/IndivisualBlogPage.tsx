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
import BlogFloatingForm from "../BlogFloatingForm";

function IndividualBlogPage({blogUrl}: {blogUrl?: string}) {
    // const id = Number(useParams<{ id: string }>().id);

    const url= blogUrl;
    const [categoryBlogs, setCategoryBlogs] = useState<Blog|null>(null)
    const [blogHeaderData, setBlogHeaderData] = useState<BlogHeaderProps | null>(null);
    const [blogContentData, setBlogContentData] = useState<BlogContentProps | null>(null);
    const [blogimage,setBlogImage]= useState<string|null>(null);
    const [blogSEOTitle,setBlogSEOTitle]=useState<string|null>(null);
    const [blogSEODescription,setBlogSEODescription]=useState<string|null>(null);
    const navigate = useRouter();

    useEffect(() => {

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
        })    
        }
            else{
                navigate.push('*')
            }
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
    return(
        <>

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
                   <div className="blogContentWithForm">
                  <BlogFloatingForm />
                    </div>
                </Col>
                <Col md={3} sm={10} className="p-0">
                    <BlogCategories/>
                </Col>
                
            </Row>
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