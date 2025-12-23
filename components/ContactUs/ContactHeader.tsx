import React from 'react'
import NavigationMenu from '../NavigationMenu'
import './ContactHeader.css'

const ContactHeader = () => {
    return (
        <section className='ch-container'>
            <NavigationMenu />
            <div className="customContainer">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className='ch-heading'>Contact Us</div>
                        <div className="ch-subheading pt-3">We believe in creating unique opportunities for our clients and the community. Let us know how we can help real estate work for you, and we’ll get back to you shortly.</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactHeader
