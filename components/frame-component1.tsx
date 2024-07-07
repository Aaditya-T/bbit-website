import HostelNameContainer from "./hostel-name-container";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[1904px] relative max-w-full text-center text-21xl text-daisy-bush-50 font-outfit mq900:h-auto mq900:min-h-[1904] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[2158px] h-[1702px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[-195.1px] max-h-full w-[2539.5px]"
          alt=""
          src="/bg-circle.svg"
        />
        <img
          className="absolute top-[77px] left-[652px] w-[102px] h-[102px] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/pin-1@2x.png"
        />
      </div>
      <div className="absolute top-[101.4px] left-[436px] w-[1277px] flex flex-col items-end justify-start pt-[8.6px] px-0 pb-[287px] box-border gap-[114px] max-w-full">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0.3px] max-h-full z-[1]"
          alt=""
          src="/ladder.svg"
        />
        <div className="w-[1032.8px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px] max-w-full mq900:flex-wrap">
          <div className="w-[210.1px] flex flex-col items-start justify-start pt-[81.3px] px-0 pb-0 box-border">
            <b className="self-stretch relative z-[2] mq900:text-13xl mq450:text-5xl">
              COURSES
            </b>
          </div>
          <img
            className="h-[250px] w-[250px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/stu2-1@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-0 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[141px] max-w-full">
            <div className="self-stretch flex flex-col items-end justify-start gap-[109px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="w-[1097px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full mq900:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
                    <img
                      className="w-[250px] h-[250px] relative object-cover z-[2]"
                      alt=""
                      src="/hostel-1@2x.png"
                    />
                  </div>
                  <HostelNameContainer hOSTELS="HOSTELS" />
                </div>
              </div>
              <div className="w-[1076px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border gap-[20px] max-w-full mq900:flex-wrap mq900:justify-center">
                <HostelNameContainer
                  hOSTELS="EVENTS"
                  propWidth="228.7px"
                  propGap="20.6px"
                />
                <div className="flex flex-col items-start justify-start pt-[60px] px-0 pb-0">
                  <img
                    className="w-[250px] h-[250px] relative object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/event3-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[1100.1px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px] mq900:flex-wrap">
              <img
                className="h-[250px] w-[250px] relative object-cover shrink-0 z-[2]"
                alt=""
                src="/event-4@2x.png"
              />
              <div className="w-[329.2px] flex flex-col items-start justify-start pt-[63px] px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                  <b className="flex-1 relative inline-block shrink-0 max-w-full z-[2] mq900:text-13xl mq450:text-5xl">
                    <p className="m-0">{`AWARDS & `}</p>
                    <p className="m-0">ACHIVEMENTS</p>
                  </b>
                  <img
                    className="h-[102px] w-[102px] absolute !m-[0] top-[-79px] right-[-47.9px] object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/pin-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
