import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <section className="contact-area">
                <div className="container">
                    <div className="gx-row d-flex justify-content-between gap-24">
                        <div className="contact-infos">
                            <h3 data-aos="fade-up">Contact Info</h3>
                            <ul className="contact-details">
                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        <FaEnvelope />
                                    </div>
                                    <div className="right">
                                        <span>MAIL us</span>
                                        <h4>adnanalemran@hotmail.com</h4>
                                        <h4>adnanalemranontor@gmail.com</h4>
                                    </div>
                                </li>

                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="right">
                                        <span>Contact Us</span>
                                        <h4>+88 01917 019 619</h4>
                                        
                                    </div>
                                </li>

                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="right">
                                        <span>Location</span>
                                        <h4>Agargaon, Dhaka, Bangladesh(1207)</h4>
                                    </div>
                                </li>
                            </ul>

                         
                        
                        </div>

                    
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
