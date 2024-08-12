const Footer = () => {
  return (
    <footer className={`py-10 bg-[url("/footer.png")] bg-cover bottom-0 w-full`}>
      <div className="container flex flex-row items-center text-center">

        <div className="w-1/3">
          <h3 className="text-2xl font-bold text-white">Address</h3>
          <p className="text-white">
            Nr. Shastri maidan, opp. ISCKON Temple, Vallabh Vidyanagar, Anand,
            Gujarat, 388120
          </p>
        </div>

        <div className="w-1/3">
          <h3 className="text-2xl font-bold text-white">Contact</h3>
          <p className="text-white">02692 - 237240</p>
          <p className="text-2xl font-bold text-white mt-5">
            Email: <br /><a href="mailto:principal@bbit.ac.in" className="text-white font-light text-base">
              principal@bbit.ac.in
            </a>
          </p>
        </div>

        <div className="w-1/3 text-start">
          <h3 className="text-2xl font-bold text-white">Follow us on:</h3>
          <div className="flex flex-row mt-5">
            <a href="#" className="mr-5">
              <img src="/footer_images/facebook.svg" alt="facebook" />
            </a>
            <a href="#" className="mr-5">
              <img src="/footer_images/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" className="mr-5">
              <img src="/footer_images/twitter.svg" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/footer_images/linkedin.svg" alt="Linkedin" />
            </a>
          </div>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
