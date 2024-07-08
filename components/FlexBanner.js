import Image from "next/image";
import React, { useEffect } from "react";

const FlexBanner = () => {
  useEffect(() => {
    //put 2nd image 100% width
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
    <div className="absolute mt-[5vh] w-[30vw] h-[10vh] flex gap-1 top-[10vh] right-[10vw] ">
      {[1, 2, 3, 4].map((index) => (
        <Image
          key={index}
          src={`/home/banner-${index}.jpg`}
          alt="college-images"
          className={`hover:w-[100%] w-[10%] h-[40vh] object-cover border-2 rounded-[10px] border-solid border-[#27066F] z-[1]`}
          width="0"
          height="0"
          id={`banner-${index}`}
        />
      ))}
    </div>
  );
};

export default FlexBanner;
