"use client";
import React from "react";
import NavigationMenu from "./NavigationMenu";
import { useRouter } from 'next/navigation';
import RelatedArticles from "../components/All Case Studies/RelatedArticles";
import GetInTouch from "./GetInTouch";
import "./InTheNews.css"
import Head from "next/head";

function InTheNews(){

   const router = useRouter();
      const navigateTo = (path: string) => {
        router.push(path);
      };

    return(
    <>
        <section className="newsHeaderSection">
            <NavigationMenu/>
            <h1 className="newsHeading customContainer">Press<br/>features</h1>
        </section>
        <div className="customContainer mt-5">
            <div className="row">
            <div className="col-12 col-md-6">
                            <div className="news-channel-card mx-2">
                                <img
                                    loading="lazy"
                                    className="news-channel-img"
                                    src="/assets/InTheNews/newsrealsta.webp"
                                    alt="realsta"
                                />
                                <div className="news-channel-details">
                                    <div className="news-partner-name">With Realsta, make your real estate work for you</div>
                                    <div className="news-industry pt-3">While every real estate investor must equip themselves with minimal asset management knowledge, larger entities with diverse investment portfolios must rely on seasoned industry professionals to maximize the value of their holdings and return on investments (ROI).</div>
                                    <div>
                                        <button className='btn-secondary-alternative-custom mt-5' style={{ alignSelf: 'end' }} onClick={()=>window.open("https://www.thehindu.com/brandhub/pr-release/with-realsta-make-your-real-estate-work-for-you/article65233751.ece","_blank")}>
                                            Read Article<i className="fa-solid fa-arrow-right ms-2 hp-buttonArrow"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6">
                            <div className="news-channel-card mx-2">
                                <img
                                    loading="lazy"
                                    className="news-channel-img"
                                    src="/assets/InTheNews/newsdishant.webp"
                                    alt="realsta"
                                />
                                <div className="news-channel-details">
                                    <div className="news-partner-name">Real Estate consultant Dishant Malik shares his insights about the realm of realty</div>
                                    <div className="news-industry pt-3">Real estate happens to be one of the oldest and most lucrative businesses worldwide. Before globalization, people invested in real estate in their localities but as the world...</div>
                                    <div>
                                        <button className='btn-secondary-alternative-custom mt-5' style={{ alignSelf: 'end' }} onClick={()=>window.open("https://www.fortuneindia.com/people/real-estate-consultant-dishant-malik-shares-his-insights-about-the-realm-of-realty/107826#google_vignette","_blank")}>
                                            Read Article<i className="fa-solid fa-arrow-right ms-2 hp-buttonArrow"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
        </div>
        <RelatedArticles/>
        <GetInTouch />
        
    </>
    )
}

export default InTheNews