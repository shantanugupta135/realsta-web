"use client";
import React from 'react'
import './AllCaseStudies.css';
import ReadyToTalk from '../ReadyToTalk';
import SuccessStories from './SuccessStories';
import CaseStudyCard from './CaseStudyCard';
import RelatedArticles from './RelatedArticles';
import Head from 'next/head';

const AllCaseStudies = () => {
  return (
    <>
        <Head>
          <title>Realsta Client Success Stories | Commercial Real Estate Case Studies</title> 
              <meta name="description" content="Explore Realsta’s case studies showcasing successful commercial real estate solutions for top clients. From leasing to workspace transformation." />
              <link rel="canonical" href="https://realsta.com/case-study" />
        </Head>
        <SuccessStories />
        <CaseStudyCard />
        <RelatedArticles />
        <ReadyToTalk /> 
    </>
  )
}

export default AllCaseStudies
