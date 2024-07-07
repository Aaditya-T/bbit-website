import NewsItemRow from "./news-item-row";
import MessageRow from "./message-row";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-daisy-bush-950 font-open-sans ${className}`}
    >
      <div className="w-[1810px] flex flex-row items-end justify-start gap-[145px] max-w-full mq900:gap-[36px] mq1275:gap-[72px] mq450:gap-[18px] mq1600:flex-wrap">
        <div className="w-[775px] rounded-14xl bg-daisy-bush-200 flex flex-col items-center justify-start pt-[56.6px] pb-[41.9px] pr-[31px] pl-5 box-border gap-[56.5px] min-w-[775px] max-w-full mq900:gap-[28px] mq900:pt-[37px] mq900:pb-[27px] mq900:box-border mq900:min-w-full mq450:pt-6 mq450:pb-5 mq450:box-border mq1600:flex-1">
          <div className="w-[775px] h-[864px] relative rounded-14xl bg-daisy-bush-200 hidden max-w-full" />
          <div className="w-[578px] flex flex-row items-start justify-end pt-0 pb-[10.5px] pr-9 pl-[38px] box-border max-w-full text-center text-17xl font-outfit">
            <b className="flex-1 relative inline-block max-w-full z-[1] mq900:text-10xl mq450:text-3xl">
              LATEST NEWS
            </b>
          </div>
          <NewsItemRow />
          <NewsItemRow />
          <div className="w-[577.4px] flex flex-col items-start justify-start gap-[30px] max-w-full mq900:gap-[15px]">
            <div className="w-[481.7px] flex flex-row items-start justify-start gap-[19.9px] max-w-full mq900:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[3.8px] px-0 pb-0">
                <img
                  className="w-[44.6px] h-[44.3px] relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/news-item-content.svg"
                />
              </div>
              <b className="flex-1 relative inline-block min-w-[157px] shrink-0 max-w-full z-[1] mq900:text-7xl mq450:text-lgi">
                25 June 2024
              </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-12 box-border max-w-full text-7xl mq900:pl-6 mq900:pr-6 mq900:box-border">
              <b className="w-[463.9px] relative inline-block shrink-0 max-w-full z-[1] mq450:text-2xl">
                Creato event result declaration
              </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
              <img
                className="h-[7px] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/line-12.svg"
              />
            </div>
            <button className="cursor-pointer [border:none] pt-[9.1px] pb-[9px] pr-4 pl-[18px] bg-daisy-bush-100 rounded-md flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-thistle-100">
              <div className="h-[48.6px] w-[171.8px] relative rounded-md bg-daisy-bush-100 hidden" />
              <b className="relative text-5xl leading-[30.5px] font-open-sans text-daisy-bush-950 text-left z-[2]">
                View More
              </b>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[114.2px] min-w-[578px] max-w-full text-9xl font-outfit mq900:min-w-full mq1275:gap-[57px] mq450:gap-[29px]">
          <MessageRow
            erBHIKHUBHAIBPATEL="Er. BHIKHUBHAI B. PATEL"
            cHAIRMANsMESSAGE="CHAIRMAN's MESSAGE"
            educationPlaysAVitalRoleI="Education plays a vital role in the socio-economic development of the country; Education that is thorough, purposeful and meets the requirements of today’s technological industry market. It is our deepest desire to serve the society by molding the technocrats of tomorrow. "
            chairman="/chairman@2x.png"
          />
          <MessageRow
            erBHIKHUBHAIBPATEL="Dr. K.M Makwana"
            cHAIRMANsMESSAGE="PRINCIPAL's MESSAGE"
            educationPlaysAVitalRoleI="I am proud of being the Principal of such a wonderful institution dedicated to the causes of better India. Through education and their real empowerment, come on let's give our best and make this Institution a modern temple of learning through our diligence, devotion and dedication. "
            chairman="/principal@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
