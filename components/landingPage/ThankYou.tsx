"use client";   
import React from "react";
import NavigationMenu from "../NavigationMenu";
import {useRouter} from "next/navigation";
import '../../Page404.css';
import Head from "next/head";

const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/download/Realsta_Company_Profile.pdf"; // file must be inside /public
    link.download = "Realsta_Company_Profile.pdf";
    link.click();
  };

function ThankYou(){
   const router = useRouter(); // CHANGE: Ensure useRouter is used correctly
    const navigateTo = (path: string) => {
      router.push(path);
    };

    return(
        <>
        <Head>
                    {`<!-- Google tag (gtag.js) -->`}
                            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17470231838"></script>
                    <script>{`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'AW-17470231838');`}
                    </script>
                     {`<!-- Hotjar Tracking Code for https://realsta.com/landingPage -->`}
<script>
    {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:6502061,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
</script>
                        </Head>
        <section className="container_404">
            <NavigationMenu/>
            <div className="box_404">
                <h1 className="title_404">Thank You!</h1>
            <p className="description_404">Your interest in Emaar India’s upcoming commercial property in Gurgaon has been successfully received.<br/>Early investors in Emaar properties typically benefit from up to 300% appreciation post-possession. </p>
            {/* <button className='btn-secondary-alternative-custom button_404' onClick={() => navigateTo('/')}>
                    Go to Homepage<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
            </button> */}
            <p className="description_404"><b>What Happens Next?</b></p>
             <p className="description_404 mt-1">One of our senior consultants from Realsta will reach out to you within 72 hours to understand your requirements.</p>
            
            <button className='btn-secondary-alternative-custom button_404' onClick={handleDownload}>
                    Download Our Corporate Profile<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
            </button>
            {/* <p className="description_404"><b><a href="/assets/download/Realsta_Company_Profile.pdf" download="Realsta_Company_Profile.pdf" className='link_404'>Download Our Corporate Profile</a></b></p> */}
            <p className="enquiery_404 mt-5"><strong>Still Have Questions?</strong></p>
            <p className="enquiery_404 mt-1">Email us at <a href="mailto:enquiry@realsta.com" className='link_404'>enquiry@realsta.com</a> or Call us directly at <a href="tel:+917840001269" className='link_404' >+91 - 7840001269</a>  and we’ll point you in the right direction.</p>
            </div>
        </section>
        </>
    )
}

export default ThankYou
