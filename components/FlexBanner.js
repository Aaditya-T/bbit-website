import React, { useEffect, useRef } from 'react';

const FlexBanner = () => {
  const flexBannerRef = useRef(null);
  let currentBigImage = null;

  useEffect(() => {
    const images = flexBannerRef.current.querySelectorAll('img');

    // Remove the big class from all images
    images.forEach((img) => {
      img.classList.remove('big');
    });

    // Set the second image as big by default
    images[1].classList.add('big');
    currentBigImage = images[1];

    images.forEach((img) => {
      img.addEventListener('click', () => {
        // Remove the big class from all images
        images.forEach((otherImg) => {
          otherImg.classList.remove('big');
        });
        // Add the big class to the clicked image
        img.classList.add('big');
        currentBigImage = img;
      });

      img.addEventListener('mouseover', () => {
        // Remove the big class from the currently big image
        if (currentBigImage && currentBigImage !== img) {
          currentBigImage.classList.remove('big');
        }
      });

      img.addEventListener('mouseout', () => {
        // Add the big class back to the previously big image
        if (currentBigImage) {
          currentBigImage.classList.add('big');
        }
      });
    });
  }, []);

  return (
    <div ref={flexBannerRef} className="flex-banner mt-10">
      <img src='/home/banner-1.jpg' alt="college-images"></img>
      <img src='/home/banner-2.jpg' alt="college-images"></img>
      <img src='/home/banner-3.jpg' alt="college-images"></img>
      <img src='/home/banner-4.jpg' alt="college-images"></img>
    </div>
  );
};

export default FlexBanner;