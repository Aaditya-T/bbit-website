// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className={styles.container}>
      <svg
        width="1440"
        height="408"
        viewBox="0 0 1440 408"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M0 68.5026V407.504H1440V68.5026C1440 68.5026 1011.98 0.370095 721.5 0.00148773C429.707 -0.36879 0 68.5026 0 68.5026Z"
          fill="#5F13EE"
        />
      </svg>
      <div className={styles.overlay}>
        <div className={`${styles.footerSection} ${styles.address}`}>
          <h3>Address:</h3>
          <p>Nr. Shastri maidan, opp. ISCKON Temple, Vallabh Vidyanagar, Anand, Gujarat, 388120</p>
        </div>
        <div className={`${styles.footerSection} ${styles.contact}`}>
          <h3>Contact:</h3>
          <p>02692 - 237240</p>
          <h3>Email:</h3>
          <p>principal@bbit.ac.in</p>
        </div>
        <div className={styles.footerSectionFollow}>
          <h3>Follow Us On:</h3>
          <div className={styles.socialIcons}>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <a href="#">Privacy Policy</a>
          <p>Copyright 2024. All Rights Reserved By BBIT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
