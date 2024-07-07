import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`w-[2093.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-daisy-bush-100 font-outfit ${className}`}
    >
      <div className="w-[1907.6px] flex flex-row items-start justify-center gap-[65.9px] max-w-full mq900:gap-[33px] mq450:gap-[16px] mq1600:flex-wrap">
        <div className="w-[563.5px] flex flex-col items-start justify-start gap-[113.7px] min-w-[563.5px] max-w-full mq900:gap-[57px] mq900:min-w-full mq450:gap-[28px] mq1600:flex-1">
          <div className="self-stretch relative z-[4] mq900:text-10xl mq450:text-3xl">
            <p className="m-0 font-semibold">{`Address: `}</p>
            <p className="m-0 whitespace-pre-wrap">
              Nr. Shastri maidan, opp. ISCKON Temple, Vallabh Vidyanagar, Anand,
              Gujarat, 388120
            </p>
          </div>
          <div className="relative capitalize z-[4] mq900:text-10xl mq450:text-3xl">
            privacy policy
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-between min-w-[831px] max-w-full gap-[20px] mq1275:flex-wrap mq1275:min-w-full">
          <div className="w-[702px] flex flex-col items-start justify-start gap-[122.7px] min-w-[702px] max-w-full mq900:gap-[61px] mq900:min-w-full mq1275:flex-1 mq450:gap-[31px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px] box-border max-w-full">
              <div className="w-[392.6px] relative inline-block shrink-0 max-w-full z-[4] mq900:text-10xl mq450:text-3xl">
                <p className="m-0 font-semibold">Contact:</p>
                <p className="m-0">02692 - 237240</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 font-semibold">Email:</p>
                <p className="m-0">principal@bbit.ac.in</p>
              </div>
            </div>
            <div className="relative capitalize z-[4] mq900:text-10xl mq450:text-3xl">
              copyright 2024. all rights reserved by bBIT
            </div>
          </div>
          <div className="w-[491.5px] flex flex-col items-start justify-start gap-[52.9px] min-w-[491.5px] max-w-full mq900:gap-[26px] mq900:min-w-full mq1275:flex-1">
            <div className="self-stretch relative capitalize font-semibold z-[4] mq900:text-10xl mq450:text-3xl">{`Follow us on: `}</div>
            <div className="w-[380.7px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap mq450:justify-center">
              <img
                className="h-[52.5px] w-[52.5px] relative object-cover min-h-[53px] z-[4]"
                loading="lazy"
                alt=""
                src="/instagram-1@2x.png"
              />
              <img
                className="h-[52.5px] w-[52.5px] relative object-cover min-h-[53px] z-[4]"
                loading="lazy"
                alt=""
                src="/linkedin-1@2x.png"
              />
              <img
                className="h-[52.5px] w-[52.5px] relative object-cover min-h-[53px] z-[4]"
                loading="lazy"
                alt=""
                src="/twitter-1@2x.png"
              />
              <img
                className="h-[52.5px] w-[52.5px] relative object-cover min-h-[53px] z-[4]"
                loading="lazy"
                alt=""
                src="/facebook-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
