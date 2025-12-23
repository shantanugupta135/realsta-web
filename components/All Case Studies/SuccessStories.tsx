"use client";
import React, { use } from 'react';
import './SuccessStories.css';
import NavigationMenu from '../NavigationMenu';
import { useRouter } from "next/navigation";

const SuccessStories = () => {
    
   const router = useRouter();
    const navigateTo = (path: string) => {
      router.push(path);
    };
    
    return (
        <section className='ss-container'>
            <NavigationMenu />
            <div className="customContainer ss-content">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className='ss-heading'>Success Stories</div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-6 col-md-2 d-flex justify-content-end">
                    <button className='btn-secondary-custom' onClick={() => navigateTo('/our-services/corporate-leasing')}>
                        Lease an Office<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                    </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SuccessStories
