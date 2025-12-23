"use client";
import React, { useEffect, useState, useRef } from 'react';
import './Blogs.css';
import {  fetchBlogsByCategory,fetchBlogsPaginated, fetchBlogsBySearch, Blog,BlogCategory } from '../services/blogService';
import NavigationMenu from './NavigationMenu';
import ReadyToTalk from './ReadyToTalk';
import Link from 'next/link';

// export enum BlogCategory {
//   "All Blogs" = 0,
//   "Investing" = 1,
//   "Consulting" = 2,
//   "Offices" = 3,
//   "Leasing" = 4,
//   "Trends" = 5,
//   "Properties" = 6,
//   "Residential" = 7,
//   "Basics" = 8
// }

const Blogs = () => {
    // const location = useLocation();

    // const catId = location.state?.catId || 0;
    // const [categoryId,setCategoryId]=useState<number>(catId)
    const [blogData, setBlogData] = useState<Blog|null>(null)
    const [loadOffset,setLoadOffset]= useState(0)

    const [showMore,setShowMore]=useState(true)
      
    const [selectedCategory, setSelectedCategory] = useState<number>(0);
    const [searchText, setSearchText] = useState('');
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

// useEffect(() => {
//     // whenever location changes, update category
//     setCategoryId(location.state?.catId || 0);
//   }, [location]);

    useEffect(() => {
            if (selectedCategory === 0) {

                 fetchBlogsPaginated(12,loadOffset)
                .then(data => {
                setBlogData(data);
                setSelectedCategory(selectedCategory);
            })
                // .catch(() => setBlogData());
                .catch(() => {});
            }
            else{ fetchBlogsByCategory(12,loadOffset,selectedCategory)
            .then(data => {
                setBlogData(data);
                setSelectedCategory(selectedCategory);
            })
            .catch(() => {});
            // .catch(() => setBlogData([]))
            ;}
    }, [selectedCategory]);

    const handleLoadMore = () => {

        setLoadOffset(loadOffset+12)
        if (selectedCategory===0) {
                 fetchBlogsPaginated(12,loadOffset+12)
                .then(data => {
                    if (data.data.length<12){
                        setShowMore(false)
                    }
                setBlogData(mergeBlogData(blogData,data));
                setSelectedCategory(selectedCategory);
            })
            .catch(() => {});
            }
            else{ 
                fetchBlogsByCategory(12,loadOffset+12,selectedCategory)
                .then(data => {
                    if (data.data.length<12){
                        setShowMore(false)
                    }
                setBlogData(mergeBlogData(blogData,data));
                setSelectedCategory(selectedCategory);
            })
            .catch(() => {});
            }
        }

const mergeBlogData = (oldBlog: Blog | null, freshBlogs: Blog): Blog => {
    if (!oldBlog) return freshBlogs;
    return {
        ...oldBlog,
        data: [...oldBlog.data, ...freshBlogs.data]
    };
};

    const handleCategoryChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLoadOffset(0)
        setShowMore(true)
        const catId = Number(e.target.value);
        setSelectedCategory(catId);

        if (catId === 0) {
            fetchBlogsPaginated(12,0)
                .then(data => {
                     if (data.data.length<12){
                        setShowMore(false)
                    }
                    setBlogData(data)})
                // .catch(() => setBlogData([]));
                .catch(() => {});
        } else {
            fetchBlogsByCategory(12, 0, catId)
                .then(data =>{
                     if (data.data.length<12){
                        setShowMore(false)
                    }
                    setBlogData(data)})
                // .catch(() => setBlogData([]));
                .catch(() => {});
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchText(value);

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        debounceRef.current = setTimeout(() => {
            if (value.trim().length >= 3) {
                fetchBlogsBySearch(value)
                    .then(data => setBlogData(data))
                    // .catch(() => setBlogData([]));
                    .catch(() => {});
            } else if (value.trim().length === 0) {
                // If search is cleared, show blogs for selected category
                if (selectedCategory === 0) {
                    fetchBlogsPaginated(12,0)
                        .then(data => setBlogData(data))
                        .catch(() => {});
                        // .catch(() => setBlogData([]));
                } else {
                    fetchBlogsByCategory(12, 0, selectedCategory)
                        .then(data => setBlogData(data))
                        .catch(() => {});
                        // .catch(() => setBlogData([]));
                }
            }
            // If less than 3 chars and not empty, do nothing
        }, 400); // 400ms debounce
    };

    return (
        <section>
            <NavigationMenu />
            <div className="customContainer">
                <div className='blogsContainer'>
                    <div className="row pt-5 pb-5">
                        <div className="blog-heading">BLOGs & Insights</div>
                    </div>
                    <aside className="blogSidebar">
                    </aside>
                    <div className="row mb-5 mt-5">
                        <div className="col-12 col-md-4">
                            <select
                                className='blog-select'
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                {Object.entries(BlogCategory)
                                    .filter(([key, value]) => !isNaN(Number(value)))
                                    .map(([label, value]) => (
                                        <option key={value} value={value} style={{width:"40%"}}>
                                            {label}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className="col-12 col-md-4"></div>
                        <div className="col-12 col-md-4">
                            <input
                                className='blog-search'
                                type="text"
                                placeholder='Type Here...'
                                value={searchText}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        {blogData && blogData.data.map((blog, idx) => {
                            const date = new Date(blog.blog_date?.toString() || '');
                            const day = date.getDate().toString();
                            const month = date.toLocaleString('default', { month: 'short' });
                            const year = date.getFullYear().toString();
                            return(
                            <div className="example-2 card col-9 col-md-4 mb-5 w-auto" key={blog.id || idx}>
                                <div className="wrapper" style={{ position: 'relative', background: 'none', width:'auto' }}>
                                    <img
                                        loading="lazy"
                                        src={blog.blog_img}
                                        alt={blog.blog_title}
                                        style={{
                                            // width: '100%',
                                            // height: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            filter: 'brightness(0.75)',
                                        }}
                                        className='blog-image'
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
                                                {/* new DOMParser().parseFromString(blog.blog_title, "text/html").documentElement.textContent */}
                                                <a href={`/blog/${blog.blog_url}`}  rel="noopener noreferrer">{new DOMParser().parseFromString(blog.blog_title, "text/html").documentElement.textContent}</a>
                                            </h2>
                                            {/* <p className="text">{blog.short_desc}</p> */}
                                            <Link
                                                // to={`/blog/${blog.id}`}
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
                        {showMore&& <div className="p-browse-more-wrapper pt-5 mb-5 d-flex justify-content-center">
                                <button className='p-browse-more' onClick={handleLoadMore}>Browse More Blogs<i className="fa-solid fa-arrow-right p-browse-more-arrow"></i></button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <ReadyToTalk />
        </section>
    )
}

export default Blogs;
