import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { BlogCategory } from "../../../services/blogService";
import "./BlogHeader.css";

interface BlogHeaderProps {
    // id :number
    url: string;
    title: string;  
    category: number;
    date: string;
}

const blogUrl="https://www.realsta.com/blog/"

function BlogHeader({ data }: { data: BlogHeaderProps }) {
    return (
        <div className="customContainer mt-5 mb-3">
            <Row>
                <Col md={12} >
                <p className="blogHeadertext"><Link href="/blogs" className="blogHeaderlink">Blogs & Insight</Link><span> {" > "}</span><Link href={`/blogs?catId= ${data.category}`} className="blogHeaderlink">{BlogCategory[data.category]} </Link><span className="blogHeadertext">{` \u003E ${new DOMParser().parseFromString(data.title, "text/html").documentElement.textContent}`}</span > </p>
                </Col>
                
                <Col md={12}>
                <h1 className="blogHeaderTitle">{new DOMParser().parseFromString(data.title, "text/html").documentElement.textContent}</h1>
                </Col>

                <Col md={12}>
                <Row style={{display: "flex"}}>
                    <div className="blogHeaderdate">
                    <p className="m-0">Published on : <span>{new Date(data.date).toDateString()}</span></p>
                    </div>
                    <Col md={9} sm={12}>
                    {/* <i className="fa-brands fa-facebook-f social-icon mx-2" onClick={()=>{window.open(`https://www.facebook.com/sharer.php?u=${blogUrl+data.id}`,"_blank")}}></i> */}
                    <i className="fa-brands fa-square-facebook share-social-icon mx-2" onClick={()=>{window.open(`https://www.facebook.com/sharer.php?u=${blogUrl+data.url}`,"_blank")}}></i>                       
                           
                    {/* <i className="fa-brands fa-linkedin-in social-icon mx-2" onClick={()=>{window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl+data.id}`,"_blank")}}/>        */}
                    <i className="fa-brands  fa-linkedin share-social-icon mx-2" onClick={()=>{window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl+data.url}`,"_blank")}}/>
                            
                    {/* <i className="fa-brands fa-x-twitter social-icon mx-2" onClick={()=>{window.open(`http://x.com/share?text=${data.title}&url=${blogUrl+data.id}`,"_blank")}}/>         */}
                    <i className="fa-brands fa-square-x-twitter share-social-icon mx-2" onClick={()=>{window.open(`http://x.com/share?text=${data.title}&url=${blogUrl+data.url}`,"_blank")}}/>
                
                    </Col>
                    
                </Row>
                
                               
                            
                </Col>
            </Row>
        
        
        
        </div>
    )
    
}

export default BlogHeader