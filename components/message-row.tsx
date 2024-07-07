import PropTypes from "prop-types";

const MessageRow = ({
  className = "",
  erBHIKHUBHAIBPATEL,
  cHAIRMANsMESSAGE,
  educationPlaysAVitalRoleI,
  chairman,
}) => {
  return (
    <div
      className={`self-stretch rounded-14xl bg-daisy-bush-200 flex flex-col items-start justify-start pt-[34.2px] pb-[8.8px] pr-5 pl-[26px] box-border relative gap-[32px] max-w-full text-left text-9xl text-daisy-bush-950 font-outfit mq450:gap-[16px] mq450:pt-[22px] mq450:pb-5 mq450:box-border ${className}`}
    >
      <div className="w-[890px] h-[375px] relative rounded-14xl bg-daisy-bush-200 hidden max-w-full z-[0]" />
      <b className="relative inline-block max-w-full z-[1] mq450:text-3xl">
        {erBHIKHUBHAIBPATEL}
      </b>
      <div className="w-[829px] relative text-11xl inline-block max-w-full z-[1] mq900:text-5xl mq450:text-lg">
        <p className="m-0 font-semibold">{cHAIRMANsMESSAGE}</p>
        <p className="m-0">
          <span>{educationPlaysAVitalRoleI}</span>
          <span className="font-medium font-outfit">READ MORE...</span>
        </p>
      </div>
      <img
        className="w-[210px] h-[210px] absolute !m-[0] top-[-121.8px] right-[105px] object-contain z-[1]"
        loading="lazy"
        alt=""
        src={chairman}
      />
    </div>
  );
};

MessageRow.propTypes = {
  className: PropTypes.string,
  erBHIKHUBHAIBPATEL: PropTypes.string,
  cHAIRMANsMESSAGE: PropTypes.string,
  educationPlaysAVitalRoleI: PropTypes.string,
  chairman: PropTypes.string,
};

export default MessageRow;
