import React from 'react'
import './Address.css'

const Address = () => {
    return (
        <section>
            <div className="customContainer">
                <div className="row">
                    <div className="col-12 col-md-4 d-flex flex-column gap-4 pt-3">
                        <div className="address-heading">
                            Address:
                        </div>
                        <div className="address-content">
                            10th Floor, Grand View Tower, Golf Course Ext Rd,<br/> Sector 58, Gurugram, Haryana 122011
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column gap-4 pt-3">
                        <div className="phone-heading">
                            Phone No:
                        </div>
                        <div className="phone-content">
                            +91 784 000 1269
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column gap-4 pt-3">
                        <div className="email-heading">
                            Email:
                        </div>
                        <div className="email-content">
                            enquiry@realsta.com
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <iframe title='address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.081767308011!2d77.1022612!3d28.4167895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d238af71ee547%3A0x1bcc9651d0743e5b!2sRealsta%20Infratech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1750968680006!5m2!1sen!2sin" width="800" height="600" loading="lazy"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Address
