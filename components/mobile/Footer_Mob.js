const Footer_Mob = () => {
  return (
    <div className="absolute w-full overflow-x-hidden -mt-[20vh]">
      <div className="absolute w-full bottom-[5vh] z-10 flex justify-around text-white text-[2.4vh]">
        <div className="flex flex-row gap-[4vh] lg:gap-[32vh]">
          <div className="flex flex-col text-[1vh]">
            <h3 className="font-bold">Address:</h3>
            Nr. Shastri maidan, opp.
            <br /> ISCKON Temple, Vallabh Vidyanagar,
            <br />
            Anand, Gujarat, 388120
          </div>
          <div className="flex flex-col text-[1vh]">
            <h3 className="font-bold">Contact:</h3>
            <p>02692 - 237240</p>
            <h3 className="mt-[2vh] font-bold">Email:</h3>
            <p
              className="cursor-pointer"
              onClick={() => window.open("mailto:principal@bbit.ac.in")}
            >
              principal@bbit.ac.in
            </p>
          </div>
          <div className="flex flex-col text-[1vh]">
            <h3 className="font-bold">Follow Us On:</h3>
            <div className="flex gap-[2vh] -ml-[1vh] ">
              <img
                className="w-[3vw] h-[4vh] cursor-pointer"
                src="/footer_images/instagram.svg"
                alt="Instagram"
                onClick={() => window.open("/", "_blank")}
              />
              <img
                className="w-[3vw] h-[4vh] cursor-pointer"
                src="/footer_images/linkedin.svg"
                alt="LinkedIn"
                onClick={() => window.open("/", "_blank")}
              />
              <img
                className="w-[3vw] h-[4vh] cursor-pointer"
                src="/footer_images/twitter.svg"
                alt="Twitter"
                onClick={() => window.open("/", "_blank")}
              />
              <img
                className="w-[3vw] h-[4vh] cursor-pointer"
                src="/footer_images/facebook.svg"
                alt="Facebook"
                onClick={() => window.open("/", "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-[1vh] z-10 text-[0.7vh] text-white text-center">
        Copyright 2024. All Rights Reserved By BBIT
      </div>
      <div className="relative w-full flex justify-center items-center bottom-0 z-0">
        <img src="../footer_images/footer_mob.png" alt="footer" className="w-full h-[18vh] mt-[6.5vh]" />
      </div>
    </div>
  );
};

export default Footer_Mob;