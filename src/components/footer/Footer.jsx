import React from 'react';
import './styles.css';
import { FaLinkedin, FaSquareFacebook, FaSquareXTwitter, FaSquarePinterest, FaSquareInstagram } from "react-icons/fa6";



function Footer(props) {
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className="container">
                <div className='info'>
                    <div className="text-center contact width text-white">
                        <h4 className='font-text'>
                            Contact Us
                        </h4>
                        <a href='#'>
                            <span>
                                Location
                            </span>
                        </a>
                        <a href='#'>
                            <span>
                                Call +84 909345719
                            </span>
                        </a>
                        <a href='#'>
                            <span>
                                duykhang4568@gmail.com
                            </span>
                        </a>

                    </div>
                    <div className="info-detail width text-white text-center">
                        <a href='#' className='font-text'>
                            Feane
                        </a>
                        <p>
                            Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                        </p>
                        <div className="social-media">
                            <a>
                                <FaSquareFacebook />
                            </a>
                            <a>
                                <FaSquareXTwitter />
                            </a>
                            <a>
                                <FaLinkedin />
                            </a>
                            <a>
                                <FaSquareInstagram />
                            </a>
                            <a>
                                <FaSquarePinterest />
                            </a>
                        </div>
                    </div>
                    <div className="open-hours width text-white text-center">

                        <h4 className='font-text'>
                            Open Hours
                        </h4>
                        <p>Everyday</p>
                        <p>10.00 Am - 10.00 Pm</p>
                    </div>
                </div>
                <div className="copyright text-center text-white">
                    <p>
                        © {currentYear} All Rights Reserved By Free <a href='https://html.design/'>Html Templates</a>
                    </p>
                    <br />
                    <p>

                        © Distributed By <a href='https://themewagon.com/'>ThemeWagon</a>
                    </p>
                </div>
            </div>
        </div >
    );
}

export default Footer;