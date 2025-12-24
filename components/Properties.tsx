'use client';
import { useRef, useState, useEffect } from 'react';
import NavigationMenu from './NavigationMenu';
import './Properties.css';
import PropertyCard from './PropertyCard';
// import propertiesData from './data/propertiesData.json';
import { CardItem } from './types';
import ReadyToTalk from './ReadyToTalk';
import { getProperties } from '../services/popertyService';

const ITEMS_PER_PAGE = 10;

const dlfProperty={
    url:"dlf-cyber-city",
    name:"DLF Cyber City",
    card_image:"/assets/property-images/dlf-cyber-city.webp",
    card_description:"Located in DLF Phase 2,DLF Cyber City offers Grade-A office spaces in Gurgaon with top-tier infrastructure, global MNCs, and seamless metro connectivity."
}


function Properties() {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
    const [propertiesData,setPropertiesData]=useState<CardItem[]|null>(null)


    useEffect(() => {
         getProperties().then(data => {
            data.forEach(property => {
                property.card_image = 'https://api.realsta.com/' + property.card_image;
            });
                setPropertiesData(data);
      })}, []);
     

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, propertiesData?propertiesData.length:0));
    };

    const visibleProperties = propertiesData?.slice(0, visibleCount);

    const sectionRef = useRef<HTMLElement>(null); // Create a ref to the section

    const handleScroll = () => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll into view smoothly
    };

    return (
        <>
            <section className="hero-section">
                    <NavigationMenu />
                <div className="customContainer">
                    <div className="row mt9">
                        <div className="col-12 col-md-7">
                            <div className='p-heading'>Office Spaces for<br />Rent in Gurgaon</div>
                            <p className='p-subtext mt-3'>
                                Find modern commercial properties in Gurgaon with Realsta Infratech, offering flexible workspaces for businesses of all sizes.
                            </p>
                            <div className="button-wrapper">
                                <button className="btn-secondary-custom" onClick={handleScroll}>See Properties<i className="fa-solid fa-arrow-right p-browse-more-arrow"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={sectionRef}>
                <div className="customContainer">
                    <div className="p-infra-heading pb-5">Featured properties <span className='p-infratech'>for rent</span></div>
                    <div className="row d-flex flex-wrap">
                        <PropertyCard key={0} data={dlfProperty} />
                        {visibleProperties?.map((property: CardItem, index: number) => (
                            <PropertyCard key={index+1} data={property} />
                        ))}

                        {propertiesData && visibleCount < propertiesData.length && (
                            <div className="p-browse-more-wrapper pt-5 d-flex justify-content-center">
                                <button className='p-browse-more' onClick={handleLoadMore}>Browse More Properties<i className="fa-solid fa-arrow-right p-browse-more-arrow"></i></button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <ReadyToTalk />
        </>
    );
}

export default Properties;