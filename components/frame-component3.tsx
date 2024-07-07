import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-left text-21xl text-daisy-bush-950 font-orelega-one ${className}`}
    >
      <div className="w-[1809px] flex flex-col items-end justify-start gap-[71px] max-w-full mq900:gap-[35px] mq450:gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[163px] max-w-full mq900:gap-[41px] mq1275:gap-[81px] mq450:gap-[20px] mq1600:flex-wrap">
          <div className="w-[756px] flex flex-col items-start justify-start pt-24 px-0 pb-0 box-border min-w-[756px] max-w-full mq1275:min-w-full mq450:pt-[62px] mq450:box-border mq1600:flex-1">
            <div className="self-stretch h-[310px] relative inline-block shrink-0 z-[1] mq900:text-7xl mq450:text-lgi">
              <p className="m-0 text-45xl">{`Welcome to B & B Institute of Technology`}</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                <span>
                  Unlock your potential with innovative courses and hands-on
                  learning opportunities
                </span>
                <span className="text-13xl">.</span>
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-center min-w-[578px] max-w-full [row-gap:20px] mq900:flex-wrap mq900:min-w-full">
            <img
              className="self-stretch w-[115px] relative rounded-xl max-h-full object-cover min-h-[590px] z-[1]"
              loading="lazy"
              alt=""
              src="/bbitcmp-2@2x.png"
            />
            <img
              className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover min-w-[354px] min-h-[590px] z-[2] mq900:min-w-full"
              loading="lazy"
              alt=""
              src="/bbitcamp-3@2x.png"
            />
            <img
              className="self-stretch w-[115px] relative rounded-xl max-h-full object-cover min-h-[590px] z-[1]"
              loading="lazy"
              alt=""
              src="/bbitcmp-2@2x.png"
            />
            <img
              className="self-stretch w-[115px] relative rounded-xl max-h-full object-cover min-h-[590px] z-[2]"
              loading="lazy"
              alt=""
              src="/bbitcamp-2@2x.png"
            />
          </div>
        </div>
        <div className="w-[1798px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1472px] flex flex-col items-start justify-start gap-[30.9px] max-w-full mq900:gap-[15px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[54px] box-border max-w-full mq1275:pl-[27px] mq1275:pr-[27px] mq1275:box-border">
              <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq900:flex-wrap">
                <img
                  className="h-[150px] w-[150px] relative object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/activity@2x.png"
                />
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.1px]">
                  <img
                    className="w-[150px] h-[150px] relative object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/360-2@2x.png"
                  />
                </div>
                <img
                  className="self-stretch w-[150px] relative max-h-full object-cover min-h-[156px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/student@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq1275:flex-wrap">
              <button className="cursor-pointer py-[7px] pr-[55px] pl-[60px] bg-[transparent] w-[258px] rounded-31xl box-border flex flex-row items-start justify-start z-[1] border-[3px] border-solid border-daisy-bush-100 hover:bg-thistle-200 hover:box-border hover:border-[3px] hover:border-solid hover:border-thistle-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <b className="relative text-13xl font-lato text-white text-left mq900:text-7xl mq450:text-lgi">
                  Activities
                </b>
              </button>
              <button className="cursor-pointer py-[7px] pr-10 pl-[45px] bg-[transparent] w-[258px] rounded-31xl box-border flex flex-row items-start justify-start z-[1] border-[3px] border-solid border-daisy-bush-100 hover:bg-thistle-200 hover:box-border hover:border-[3px] hover:border-solid hover:border-thistle-100 mq450:pl-5 mq450:box-border">
                <b className="h-[38px] relative text-13xl inline-block font-lato text-white text-left mq900:text-7xl mq450:text-lgi">
                  Virtual Tour
                </b>
              </button>
              <button className="cursor-pointer pt-[7px] px-[74px] pb-[5px] bg-[transparent] w-[258px] rounded-31xl box-border flex flex-row items-start justify-start z-[1] border-[3px] border-solid border-daisy-bush-100 hover:bg-thistle-200 hover:box-border hover:border-[3px] hover:border-solid hover:border-thistle-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[59px] w-[258px] relative rounded-31xl box-border hidden border-[3px] border-solid border-daisy-bush-100" />
                <b className="relative text-13xl inline-block font-lato text-white text-left min-w-[104px] z-[1] mq900:text-7xl mq450:text-lgi">
                  Alumni
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
