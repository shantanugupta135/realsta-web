import React from 'react';
import './PropertyCard.css';
import { CardItem } from '../components/types';
import  Link from 'next/link';

interface cardData{
    url:string,
    name:string,
    card_image:string,
    card_description:string
}

function PropertyCard({ data }: Readonly<{ data: CardItem |cardData}>) {
    return (
        <div className="col-12 col-md-4 d-flex">
            <div className="card-wrapper">
                <img loading="lazy" src={data.card_image} alt={data.name} className='card-property-img' />
                <div className="card-name-wrapper d-flex justify-content-between mt-3 px-3">
                    <div className="card-property-name">{data.name}</div>
                    <div className="card-redirect-btn-wrapper">
                        <Link href={`/property/${data.url}`} className='pc-link'><i className="fa-solid fa-arrow-right card-redirect-btn"></i></Link>
                    </div>
                </div>
                <div className="card-location mt-2 px-3">{data.card_description}</div>
            </div>
        </div>
    );
};

export default PropertyCard;
