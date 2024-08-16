import { motion } from "framer-motion";
import React, { useEffect } from "react";

const FlexBanner = () => {
  useEffect(() => {
    const banner2 = document.getElementById("banner-2");
    banner2.style.width = "100%";

    //if any other image is hovered, make it 100% width
    const images = document.querySelectorAll("img");
    images.forEach((image) => {
      if (!image.id.includes("banner-")) {
        return;
      } else {
        image.addEventListener("mouseover", (e) => {
          images.forEach((img) => {
            if (!img.id.includes("banner-")) {
              return;
            }
            img.style.width = "10%";
          });
          e.target.style.width = "100%";
        });
      }
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="absolute mt-[5vh] w-[25vw] h-[10vh] flex gap-[0.1vh] top-[10vh] right-[15vw] z-[1]"
    >
      {[1, 2, 3, 4].map((index) => (
        <img
          key={index}
          src={`/home/banner-${index}.jpg`}
          alt="college-images"
          className={`hover:w-[100%] w-[10%] h-[40vh] object-cover border-[0.3vh] rounded-[2vh] border-solid border-[#27066F] z-[1]`}
          id={`banner-${index}`}
        />
      ))}
    </motion.div>
  );
};

export default FlexBanner;
