import React from 'react';
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones , FiLinkedin, FiMail , FiMapPin, FiPhone } from "react-icons/fi";

const ContactOne = () => {
    return (
        <>
            <div className="row row--15">
                <div className="col-lg-12">
                    <div className="rn-contact-address mt_dec--30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiPhone />
                                    </div>
                                    <div className="inner">
                                        {/* <h4 className="title">Contact Phone Number</h4> */}
                                        <p><a href="tel:9111895003">9111895003</a></p>
                                        {/* <p><a href="tel:+222 222 222 333">+222 222 222 333</a></p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        {/* <h4 className="title">Our Email Address</h4> */}
                                        <p><a href="mailto:brajeshlovanshi2001@gmail.com">brajeshlovanshi2001@gmail.com</a></p>
                                        {/* <p><a href="mailto:example@gmail.com">example@gmail.com</a></p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiLinkedin />
                                    </div>
                                    <div className="inner">
                                        {/* <h4 className="title">linkedin</h4> */}
                                        <p><a href="https://www.linkedin.com/mynetwork/grow">Linkedin</a></p>
                                        
                                        {/* <Link to="https://www.linkedin.com/mynetwork/grow/"></Link> */}
                                        {/* <p>5678 Bangla Main Road, cities 580 <br /> GBnagla, example 54786</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt--40 row--15">
                <div className="col-lg-7">
                    <ContactForm formStyle="contact-form-1" />
                </div>
                {/* <div className="col-lg-5 mt_md--30 mt_sm--30">
                    <GoogleMapStyle />
                </div> */}
            </div>
        </>
    )
}
export default ContactOne;