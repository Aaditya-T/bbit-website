// use tailwind css
const Footer = () => {
  return (
    <div className="absolute overflow-x-hidden">
      <div className="text-white flex justify-around absolute w-screen bottom-20 text-xl">
        <div className="flex flex-row gap-64">
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
              <img src="/footer_images/instagram.svg"></img>
              <img src="/footer_images/linkedin.svg"></img>
              <img src="/footer_images/twitter.svg"></img>
              <img src="/footer_images/facebook.svg"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-center absolute w-screen bottom-0 mb-5">
        Copyright 2024. All Rights Reserved By BBIT
      </div>
      
      <div className="bottom-0 w-screen flex justify-center items-center">
        <img
          src="/footer.png"
          alt="footer"
        />
      </div>
    </div>
  );
};

export default Footer;