
"use client";

import './Footer.css';
import Link from 'next/link';

function Footer() {

    return (
        <section className="footer-wrapper pt-0 pb-0">
            <hr className='mt-0' />
            <div className="customContainer pt-8">
                <div className="row">
                    <div className="col-12 col-md-3 footerSection">
                        <div>
                            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
                            <img loading="lazy" src='/assets/Footer/textlogoSmall.webp' alt=''/>
                            </Link>
                        </div>
                        <div className="footer-description mt-4">
                            <p>
                            With over ₹1,360 crore in advised capital and 22 lakh sq. ft. of commercial real estate in Gurgaon our strategy is anchored in disciplined, high-conviction commercial real estate investment across Gurgaon’s most prolific micro-markets. By combining deep operating insight, on-the-ground intelligence, and robust capital capabilities, we build and scale strategic CRE assets with enduring value.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 footerSection">
                        <div className="get-in-touch">Get in Touch</div>
                        <ul className="get-in-touch-list mt-4">
                            <li>
                                <div className='row'>
                                    <div className='col-2'>
                                        <img loading="lazy" src="/assets/Location.svg" className='social-icon m-0' alt="Location" onClick={()=>{window.open("https://www.google.co.in/maps/place/Realsta+Infratech+Pvt+Ltd/@28.4167895,77.0974976,17z/data=!4m10!1m2!2m1!1s10th+Floor,+Grand+View+Tower,+Golf+Course+Ext+Rd,+Sector+58,+Gurugram,+Haryana+122011!3m6!1s0x390d238af71ee547:0x1bcc9651d0743e5b!8m2!3d28.4167895!4d77.1022612!15sClUxMHRoIEZsb29yLCBHcmFuZCBWaWV3IFRvd2VyLCBHb2xmIENvdXJzZSBFeHQgUmQsIFNlY3RvciA1OCwgR3VydWdyYW0sIEhhcnlhbmEgMTIyMDExWlIiUDEwdGggZmxvb3IgZ3JhbmQgdmlldyB0b3dlciBnb2xmIGNvdXJzZSBleHQgcmQgc2VjdG9yIDU4IGd1cnVncmFtIGhhcnlhbmEgMTIyMDExkgESaW52ZXN0bWVudF9jb21wYW55qgGeAQoJL20vMDNmeW1nCggvbS8wM3A3chABKg4iCjEwdGggZmxvb3IoADIfEAEiG1vBwCM8GGDv4fG_m-hNOu0Yyvtehvb83etGyzJUEAIiUDEwdGggZmxvb3IgZ3JhbmQgdmlldyB0b3dlciBnb2xmIGNvdXJzZSBleHQgcmQgc2VjdG9yIDU4IGd1cnVncmFtIGhhcnlhbmEgMTIyMDEx4AEA!16s%2Fg%2F11rd5g0rvy?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D","_blank")}}/>
                                    </div>
                                    <div className='col-10'>
                                        < a href="https://www.google.co.in/maps/place/Realsta+Infratech+Pvt+Ltd/@28.4167895,77.0974976,17z/data=!4m10!1m2!2m1!1s10th+Floor,+Grand+View+Tower,+Golf+Course+Ext+Rd,+Sector+58,+Gurugram,+Haryana+122011!3m6!1s0x390d238af71ee547:0x1bcc9651d0743e5b!8m2!3d28.4167895!4d77.1022612!15sClUxMHRoIEZsb29yLCBHcmFuZCBWaWV3IFRvd2VyLCBHb2xmIENvdXJzZSBFeHQgUmQsIFNlY3RvciA1OCwgR3VydWdyYW0sIEhhcnlhbmEgMTIyMDExWlIiUDEwdGggZmxvb3IgZ3JhbmQgdmlldyB0b3dlciBnb2xmIGNvdXJzZSBleHQgcmQgc2VjdG9yIDU4IGd1cnVncmFtIGhhcnlhbmEgMTIyMDExkgESaW52ZXN0bWVudF9jb21wYW55qgGeAQoJL20vMDNmeW1nCggvbS8wM3A3chABKg4iCjEwdGggZmxvb3IoADIfEAEiG1vBwCM8GGDv4fG_m-hNOu0Yyvtehvb83etGyzJUEAIiUDEwdGggZmxvb3IgZ3JhbmQgdmlldyB0b3dlciBnb2xmIGNvdXJzZSBleHQgcmQgc2VjdG9yIDU4IGd1cnVncmFtIGhhcnlhbmEgMTIyMDEx4AEA!16s%2Fg%2F11rd5g0rvy?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='resources-items'>10th Floor, Grand View Tower,<br/>
                                        Golf Course Ext Rd, Sector 58,<br/>
                                        Gurugram, Haryana 122011
                                        
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div className='col-2'>
                                        <img loading="lazy" src="/assets/Mail.svg" className='social-icon m-0' alt="Mail" onClick={()=>{window.location.href="mailto:enquiry@realsta.com"}}/>
                                    </div>
                                    <div className='col-10'>
                                        < a href="mailto:enquiry@realsta.com" className='resources-items'>enquiry@realsta.com</a>
                                    </div>
                                </div>
                                
                                
                            </li>
                            <li>
                                 <div className='row'>
                                    <div className='col-2'>
                                        <img loading="lazy" src="/assets/Phone.svg"  className='social-icon m-0' alt="call" onClick={()=>{window.location.href="tel:+917840001269"}}/>
                                    </div>
                                    <div className='col-10'>
                                        <a href="tel:+917840001269" className='resources-items' >+91 - 7840001269</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-5 col-md-2 footerSection">
                        <div className="resources">Resources</div>
                        <ul className="resources-list gap-3 mt-4">
                            <li><a href="/assets/download/Realsta_Company_Profile.pdf" download="Realsta_Company_Profile.pdf" className='resources-items'>Company Profile</a></li>
                            <li><Link href='/about-us' className='resources-items'>About Us</Link></li>
                            <li><Link href='/our-services' className='resources-items'>Our Services</Link></li>
                            <li><Link href='/property' className='resources-items'>Properties</Link></li>
                            <li><Link href='/blogs' className='resources-items'>Blogs</Link></li>
                            <li><Link href='/terms-and-conditions' className='resources-items'>T&C</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="connect">Connect</div>
                        <ul className="connect-list gap-3 mt-4">
                            <li><Link href='/contact-us' className='resources-items'>Contact Us</Link></li>
                           <li><Link href='/careers' className='resources-items'>Careers</Link></li>
                            {/* <li><a href='#' className='resources-items'>Feedback</a></li> */}
                            <div className='row'>
                                <div className='col-4 socialIconBox' >
                                <i className="fa-brands fa-instagram social-icon" onClick={()=>{window.open("https://www.instagram.com/realstaofficial/","_blank")}}></i>                       
                            </div>
                            <div className='col-4 socialIconBox' >
                                <i className="fa-brands fa-linkedin-in social-icon" onClick={()=>{window.open("https://www.linkedin.com/company/realstaofficial/","_blank")}}/>
                            </div>
                            <div className='col-4 socialIconBox' >
                                <i className="fa-brands fa-x-twitter social-icon" onClick={()=>{window.open("https://x.com/realstaofficial","_blank")}}/>
                            </div>
                        </div>
                            
                        </ul>
                    </div>
                    <hr className="mt5" />
                </div>
                <div className='footerServiceRow row'>
                    <div className='col-5 col-md-3 footerSection'>
                        <Link href="/our-services/investment-advisory" className='footer-end-socials'>Investment Advisory</Link>
                    </div>
                    <div className='col-5 col-md-3 footerSection'>
                        <Link href="/our-services/asset-management" className='footer-end-socials'>Asset Management</Link>
                    </div>
                    <div className='col-5 col-md-2 footerSection'>
                        <Link href="/our-services/corporate-leasing"  className='footer-end-socials'>Corporate Leasing</Link>
                    </div>
                    <div className='col-5 col-md-2'>
                        <Link href="/our-services/workspace-solutions"  className='footer-end-socials'>Workspace Solutions</Link>
                    </div>
                </div>        
            </div>
        </section>
    );
}

export default Footer;