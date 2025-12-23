import React from "react";
import NavigationMenu from "./NavigationMenu";
import GetInTouch from "../components/GetInTouch";
import { useRouter } from "next/navigation";
import './Page404.css';


function Page404(){
    const navigate = useRouter();
    const navigateTo = (path: string) => {
        navigate.push(path);
    };

    return(
        <>
        <section className="container_404">
            <NavigationMenu/>
            <div className="box_404">
                <h1 className="title_404">Oops, page not found</h1>
            <p className="description_404">We couldn’t locate the page you’re after. It may have been moved or removed.</p>
            <button className='btn-secondary-alternative-custom button_404' onClick={() => navigateTo('/')}>
                    Go to Homepage<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
            </button>
            <p className="enquiery_404">If you still need help, email us at < a href="mailto:enquiry@realsta.com" className='link_404'>enquiry@realsta.com</a> and we’ll point you in the right direction.</p>
            </div>
            
        </section>
        <GetInTouch/>
        </>
    )
}

export default Page404