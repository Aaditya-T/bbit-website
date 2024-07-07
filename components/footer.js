// components/Footer.js
const Footer = () => {
    return (
        <div className="container1">
            <div className="svg-container">
                <svg 
                    width="1440" 
                    height="408" 
                    viewBox="0 0 1440 408" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path d="M0 68.5026V407.504H1440V68.5026C1440 68.5026 1011.98 0.370095 721.5 0.00148773C429.707 -0.36879 0 68.5026 0 68.5026Z" fill="#5F13EE"/>
                </svg>
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
                        <img src="/footer_images/instagram.svg"></img>
                        <img src="/footer_images/linkedin.svg"></img>
                        <img src="/footer_images/twitter.svg"></img>
                        <img src="/footer_images/facebook.svg"></img>
                       
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
