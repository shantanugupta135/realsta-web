"use client";
import { useState } from 'react';
import './ReadyToTalk.css';
import FormModal from './FormModal';

function ReadyToTalk() {

const [show, setShow] = useState(false);

    return (
            <section className="contact-section">
                <div className="row">
                    <div className="col-12 col-md-7 text-logo mt-2 mt-md-0">
                        <img loading="lazy" src="/assets/Logotext.webp" alt='logo' />
                    </div>
                    <div className="col-12 col-md-5 contact-slogan mt-4 mt-md-0">
                        <p>Making Real Estate Work for you</p>
                    </div>
                </div>
                <div className="row contact-panal">
                    <div className="col-12 col-md-7">
                        <p className="mt-3 contact-text">Let’s Build Wealth,<br/>Strategically.</p>
                    </div>
                    <div className="col-12 col-md-5 contact-button-container">
                     <FormModal show={show} onClose={() => setShow(false)} />
                        <button className='mb-2 btn-primary-alternative-custom' onClick={() => setShow(true)}>
                        Leave an Enquiry<i className="fa-solid fa-arrow-right ms-2 au-learn-more-button"></i>
                        </button>
                    </div>
                </div>
            </section>
            )
}

export default ReadyToTalk;