"use client";
import React,{useState,useEffect} from "react";
import { Row,Col } from "react-bootstrap";
import { Blog } from "../../../services/blogService";
import Link from "next/link";
import { BlogCategory } from "../../../services/blogService";

interface RelatedBlogsProps {
  data: Blog | null;
  url: string;
}

function RelatedBlogs({ data, url }: RelatedBlogsProps) {

const visibleCards = window.innerWidth < 768 ? 2 : 3;

const [blogData, setBlogData] = useState<Blog|null>(null)
  // {status:"fail",
  //           data:[{
  //                id: 1,
  //           catid: 1,
  //           blog_title: "10 Tips for a Healthier Lifestyle",
  //           blog_url: "https://www.example.com/10-tips-healthier-lifestyle",
  //           blog_img: "/assets//property-images/AIPLSignature.png", // <-- Corrected path
  //           short_desc: "Discover easy and effective ways to live a healthier life with these 10 tips.",
  //           blog_desc: "Living a healthy lifestyle doesn't require drastic changes. Start small with these simple yet effective tips that can make a huge difference in your overall well-being. From nutrition to exercise, find out how to improve your daily routine.",
  //           blog_author: "Jane Doe",
  //           blog_date: "2025-06-16",
  //           status: "published",
  //           seo_title: "10 Tips for a Healthier Lifestyle - Simple Ways to Improve Your Health",
  //           seo_desc: "Learn 10 easy tips that will help you live a healthier life. Improve your diet, exercise routine, and overall well-being with these simple steps."
  //           }]});

//  useEffect(() => {
//          fetchBlogs()
//              .then(data => setBlogData(data))
//             //  .catch(() => setBlogData([]));
//             .catch(()=>{})
//      }, []);

useEffect(()=>{
  setBlogData(data)
},[data])

const [blogIndex, setBlogIndex] = useState(0);

const handleBlogPrev = () => {
    if (blogIndex === 0) return; // Do nothing if already at first card
    setBlogIndex((prev) => prev - 1);
  };

  const handleBlogNext = () => {
    if (blogIndex >= (blogData? blogData?.data.length:0) - visibleCards) return; // Do nothing if already at last visible card
    setBlogIndex((prev) => prev + 1);
  };

    return(
      <div className="customContainer mt-5">
      <div className="customContainer mb-5">
      <Row>
        <div className="col-md-10">
        <p className="au-heading-clientele pt-3">Related <span className='au-apart-text'>Articles</span></p>
        </div>
        <Col md={2}>
        <button className="hp-partner-button" onClick={handleBlogPrev} disabled={blogIndex === 0}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="hp-partner-button" onClick={handleBlogNext} disabled={blogIndex >= (blogData? blogData?.data.length:0) - visibleCards}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>

       
          </Col>
        </Row>
        </div>
        <div className="customContainer">
        <Row>
          <Col md={12}>
          
          
          <div className="row overflow-hidden">
          <div className="d-flex">
          <div className="p-0"
              style={{
                display: 'flex',
                flexDirection: 'row',
                transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)', 
                width: `100%`,
              }}
            >
          {blogData && blogData.data.filter((blog)=>blog.blog_url!==url).slice(blogIndex, blogIndex + visibleCards+2).map((blog, idx) =>{ 
          const date = new Date(blog.blog_date?.toString() || '');
          const day = date.getDate().toString();
          const month = date.toLocaleString('default', { month: 'short' });
          const year = date.getFullYear().toString();
          return(
          <div className="example-2 card col-12 col-md-3 mb-5 mx-3" key={blog.id || idx}>
          <div className="wrapper" style={{ position: 'relative', background: 'none', width:'auto' }}>
          <img
          loading="lazy"
          src={blog.blog_img}
          alt={blog.blog_title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          />
          <div className="header">
          <div className="date">
            <span className="day">{day} </span>
            <span className="month">{month} </span>
            <span className="year">{year}</span>
          </div>
          <ul className="menu-content">
            <li>
              {BlogCategory[blog.catid]}
            </li>
          </ul>
        </div>
        <div className="data">
          <div className="content">
            <h2 className="blog-title">
              {/* <a href={`/blog/${blog.id}`} target="_blank" rel="noopener noreferrer">{blog.blog_title}</a> */}
              <a href={`/blog/${blog.blog_url}`}  rel="noopener noreferrer">{new DOMParser().parseFromString(blog.blog_title, "text/html").documentElement.textContent}</a>
            </h2>
            {/* <p className="text">{blog.short_desc}</p> */}
            <Link
              href={`/blog/${blog.blog_url}`}
              className="read-more-button"
            >
              Read more
            </Link>
            </div>
          </div>
        </div>
      </div>
    )})}
  </div>
          </div>

            </div>
            </Col>
        </Row>
        </div>
      </div>
    )

}

export default RelatedBlogs