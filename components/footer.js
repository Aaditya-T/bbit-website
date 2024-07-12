const Footer = () => {
    return (
      <div className="absolute w-full overflow-x-hidden -mt-[20vh]">
        <div className="absolute w-full bottom-20 z-10 flex justify-around text-white text-xl">
          <div className="flex flex-row gap-20 lg:gap-64">
            <div className="flex flex-col">
              <h3 className="font-bold mb-1">Address:</h3>
              Nr. Shastri maidan, opp.
              <br /> ISCKON Temple, Vallabh Vidyanagar,
              <br />
              Anand, Gujarat, 388120
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">Contact:</h3>
              <p>02692 - 237240</p>
              <h3 className="mt-5 font-bold">Email:</h3>
              <p onClick={() => window.open("mailto:principal@bbit.ac.in")}
              >principal@bbit.ac.in</p>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">Follow Us On:</h3>
              <div className="flex gap-4 mt-2">
                <img src="/footer_images/instagram.svg" alt="Instagram" />
                <img src="/footer_images/linkedin.svg" alt="LinkedIn" />
                <img src="/footer_images/twitter.svg" alt="Twitter" />
                <img src="/footer_images/facebook.svg" alt="Facebook" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full bottom-0 z-10 text-white text-center mb-5">
          Copyright 2024. All Rights Reserved By BBIT
        </div>
        <div className="relative w-full flex justify-center items-center bottom-0 z-0">
          <img
            src="/footer.png"
            alt="footer"
            className="w-full"
          />
        </div>
      </div>
    );
  };
  
  export default Footer;