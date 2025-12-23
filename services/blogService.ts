export interface Blog {
    status:string;
    data:
        {id: number;
        catid: number;
        blog_title: string;
        blog_url: string;
        blog_img: string;
        short_desc: string;
        blog_desc: string;
        blog_author: string;
        blog_date: string;
        status: string;
        seo_title: string;
        seo_desc: string;}[]
    
}

export interface IndividualBlog{
    status:string;
    data:{id: number;
        catid: number;
        blog_title: string;
        blog_url: string;
        blog_img: string;
        short_desc: string;
        blog_desc: string;
        blog_author: string;
        blog_date: string;
        status: string;
        seo_title: string;
        seo_desc: string;

    }
}

export enum BlogCategory {
  "All Blogs" = 0,
  "Investing" = 1,
  "Consulting" = 2,
  "Offices" = 3,
  "Leasing" = 4,
  "Trends" = 5,
  "Properties" = 6,
  "Residential" = 7,
  "Basics" = 8
}

export async function fetchBlogs(): Promise<Blog> {
    return ({
        status:"success",
        data:
    [
        {

            id: 1,
            catid: 1,
            blog_title: "10 Tips for a Healthier Lifestyle",
            blog_url: "https://www.example.com/10-tips-healthier-lifestyle",
            blog_img: "/assets//property-images/AIPLSignature.webp", // <-- Corrected path
            short_desc: "Discover easy and effective ways to live a healthier life with these 10 tips.",
            blog_desc: "Living a healthy lifestyle doesn't require drastic changes. Start small with these simple yet effective tips that can make a huge difference in your overall well-being. From nutrition to exercise, find out how to improve your daily routine.",
            blog_author: "Jane Doe",
            blog_date: "2025-06-16",
            status: "published",
            seo_title: "10 Tips for a Healthier Lifestyle - Simple Ways to Improve Your Health",
            seo_desc: "Learn 10 easy tips that will help you live a healthier life. Improve your diet, exercise routine, and overall well-being with these simple steps."
        },
        {
            id: 2,
            catid: 2,
            blog_title: "Investing in Real Estate: A Beginner's Guide",
            blog_url: "https://www.example.com/investing-real-estate",
            blog_img: "https://www.example.com/images/blog/investing-real-estate.jpg",
            short_desc: "Start your real estate investment journey with this comprehensive beginner's guide.",
            blog_desc: "Real estate investment can be rewarding if you know where to start. This guide covers the basics, from property types to financing options.",
            blog_author: "John Smith",
            blog_date: "2025-06-10",
            status: "published",
            seo_title: "Investing in Real Estate: A Beginner's Guide",
            seo_desc: "A comprehensive guide for beginners looking to invest in real estate."
        },
        {
            id: 3,
            catid: 3,
            blog_title: "Office Leasing Trends in 2025",
            blog_url: "https://www.example.com/office-leasing-trends-2025",
            blog_img: "https://www.example.com/images/blog/office-leasing.jpg",
            short_desc: "Explore the latest trends in office leasing for the year 2025.",
            blog_desc: "Office leasing is evolving with new trends in flexible workspaces and technology. Learn what to expect in 2025.",
            blog_author: "Emily Clark",
            blog_date: "2025-05-28",
            status: "published",
            seo_title: "Office Leasing Trends in 2025",
            seo_desc: "Stay ahead with the latest office leasing trends for 2025."
        },
        {
            id: 4,
            catid: 4,
            blog_title: "How to Choose the Right Property Consultant",
            blog_url: "https://www.example.com/right-property-consultant",
            blog_img: "https://www.example.com/images/blog/property-consultant.jpg",
            short_desc: "Find out what to look for when selecting a property consultant.",
            blog_desc: "Choosing the right property consultant can make or break your investment. Here are the key factors to consider.",
            blog_author: "Michael Lee",
            blog_date: "2025-05-15",
            status: "published",
            seo_title: "How to Choose the Right Property Consultant",
            seo_desc: "Tips for selecting the best property consultant for your needs."
        },
        {
            id: 5,
            catid: 5,
            blog_title: "Residential vs Commercial Properties: Pros and Cons",
            blog_url: "https://www.example.com/residential-vs-commercial",
            blog_img: "https://www.example.com/images/blog/residential-vs-commercial.jpg",
            short_desc: "Compare residential and commercial properties to make an informed investment decision.",
            blog_desc: "Both residential and commercial properties have their advantages and disadvantages. Learn which is right for you.",
            blog_author: "Sarah Kim",
            blog_date: "2025-04-30",
            status: "published",
            seo_title: "Residential vs Commercial Properties: Pros and Cons",
            seo_desc: "A comparison of residential and commercial property investments."
        },
        {
            id: 6,
            catid: 6,
            blog_title: "Understanding Real Estate Market Cycles",
            blog_url: "https://www.example.com/real-estate-market-cycles",
            blog_img: "https://www.example.com/images/blog/market-cycles.jpg",
            short_desc: "A guide to understanding the cycles of the real estate market.",
            blog_desc: "Market cycles affect property values and investment opportunities. This article explains the phases and how to navigate them.",
            blog_author: "David Brown",
            blog_date: "2025-04-15",
            status: "published",
            seo_title: "Understanding Real Estate Market Cycles",
            seo_desc: "Learn about the different phases of the real estate market cycle."
        }
    ]
    })
}

export async function fetchBlogsPaginated(limit: number, offset: number): Promise<Blog> {
    const response =limit!=0? await fetch(`https://www.realsta.com/api/get_data.php?limit=${limit}&offset=${offset}`):await fetch(`/api/get_data.php`);
    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return response.json();
}

export async function fetchBlogsByCategory(limit: number, offset: number, catid: number): Promise<Blog> {
    const response = limit!=0? await fetch(`https://www.realsta.com/api/get_data.php?catid=${catid}&limit=${limit}&offset=${offset}`) : await fetch(`/api/get_data.php?catid=${catid}`);
    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return response.json();
}

export async function fetchBlogByURL(postURL: string): Promise<IndividualBlog> {
    const response = await fetch(`https://www.realsta.com/api/get_data.php?postURL=${postURL}`);
    if (!response.ok) {
        throw new Error('Failed to fetch blog');
    }
    return response.json();
}

export async function fetchBlogsBySearch(text: string): Promise<Blog> {
    const response = await fetch(`https://www.realsta.com/api/get_data.php?q=${encodeURIComponent(text)}`);
    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return response.json();
}