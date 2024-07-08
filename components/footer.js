// use tailwind css
const Footer = () => {
  return (
    <div className="relative">
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
        <svg
          viewBox="0 0 1440 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M0 68.5026V407.504H1440V68.5026C1440 68.5026 1011.98 0.370095 721.5 0.00148773C429.707 -0.36879 0 68.5026 0 68.5026Z"
            fill="#5F13EE"
          />
        </svg>
      </div>
    </div>
  );
};

export default Footer;
