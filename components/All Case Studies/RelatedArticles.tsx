"use client";

import React, { useEffect, useState } from "react";
import "./SuccessStories.css";
import { Blog, fetchBlogsPaginated, BlogCategory } from "../../services/blogService";
import Link from "next/link";

const RelatedArticles = () => {
  const [blogData, setBlogData] = useState<Blog>({
    status: "fail",
    data: [],
  });

  const [blogIndex, setBlogIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // ✅ default (desktop)

  /* ✅ SAFE window usage */
  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 768 ? 2 : 3);
    };

    updateVisibleCards(); // initial
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    fetchBlogsPaginated(9, 0)
      .then((data) => setBlogData(data))
      .catch(() => {});
  }, []);

  const handleChannelPrev = () => {
    if (blogIndex === 0) return;
    setBlogIndex((prev) => prev - 1);
  };

  const handleChannelNext = () => {
    if (blogIndex >= blogData.data.length - visibleCards) return;
    setBlogIndex((prev) => prev + 1);
  };

  return (
    <section>
      <div className="customContainer">
        <div className="row">
          <div className="col-10 ps-0">
            <div className="hp-our-services-heading pt-3">
              Trending <span className="hp-our-services-heading-bold">insights</span>
            </div>
          </div>

          <div className="col-2 d-none d-md-flex justify-content-end">
            <button
              className="hp-partner-button"
              onClick={handleChannelPrev}
              disabled={blogIndex === 0}
            >
              <i className="fa-solid fa-chevron-left" />
            </button>

            <button
              className="hp-partner-button"
              onClick={handleChannelNext}
              disabled={blogIndex >= blogData.data.length - visibleCards}
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>

        <div className="row overflow-hidden mt-5">
          <div
            className="d-none d-md-flex hp-channel-slider p-0"
            style={{
              transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
              transform: `translateX(-${blogIndex * (100 / visibleCards)}%)`,
              width: `${(blogData.data.length / visibleCards) * 100}%`,
            }}
          >
            {blogData.data.map((blog, idx) => {
              const date = new Date(blog.blog_date ?? "");
              const day = date.getDate();
              const month = date.toLocaleString("default", { month: "short" });
              const year = date.getFullYear();

              return (
                <div className="example-2 card col-12 col-md-3 mb-5 mx-3" key={blog.id ?? idx}>
                  <div className="wrapper">
                    <img
                      loading="lazy"
                      src={blog.blog_img}
                      alt={blog.blog_title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.6)",
                      }}
                    />

                    <div className="header">
                      <div className="date">
                        <span className="day">{day} </span>
                        <span className="month">{month} </span>
                        <span className="year">{year}</span>
                      </div>
                      <ul className="menu-content">
                        <li>{BlogCategory[blog.catid]}</li>
                      </ul>
                    </div>

                    <div className="data">
                      <div className="content">
                        <h2 className="blog-title">
                          <Link href={`/blog/${blog.blog_url}`}>
                            {new DOMParser()
                              .parseFromString(blog.blog_title, "text/html")
                              .documentElement.textContent}
                          </Link>
                        </h2>

                        <Link href={`/blog/${blog.blog_url}`} className="read-more-button">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
