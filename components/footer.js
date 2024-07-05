// components/Footer.js

import Image from 'next/image';

const Footer = () => {
    return (
        <div className="container1">
            <div className="svg-container">
                <Image 
                    src="./public/footer_images/facebook.svg" 
                    alt="Background SVG"
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>
            <div className="overlay">
                <div className="footer-section address">
                    <h3>Address:</h3>
                    <p>Nr. Shastri maidan, opp. ISCKON Temple, Vallabh Vidyanagar, Anand, Gujarat, 388120</p>
                </div>
                <div className="footer-section contact">
                    <h3>Contact:</h3>
                    <p>02692 - 237240</p>
                    <h3>Email:</h3>
                    <p>principal@bbit.ac.in</p>
                </div>
                <div className="footer-section-follow">
                    <h3>Follow Us On:</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <a href="#">Privacy Policy</a>
                    <p>Copyright 2024. All Rights Reserved By BBIT</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
