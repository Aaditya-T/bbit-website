import { useMemo } from "react";
import PropTypes from "prop-types";

const HostelNameContainer = ({
  className = "",
  hOSTELS,
  propWidth,
  propGap,
}) => {
  const hostelNameContainerStyle = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
    };
  }, [propWidth, propGap]);

  return (
    <div
      className={`w-[291.5px] flex flex-col items-end justify-start gap-[10.1px] text-center text-21xl text-daisy-bush-50 font-outfit ${className}`}
      style={hostelNameContainerStyle}
    >
      <img
        className="w-[102px] h-[102px] relative object-contain shrink-0 z-[2]"
        loading="lazy"
        alt=""
        src="/pin-1@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-start">
        <b className="w-[240.8px] relative inline-block shrink-0 z-[2] mq900:text-13xl mq450:text-5xl">
          {hOSTELS}
        </b>
      </div>
    </div>
  );
};

HostelNameContainer.propTypes = {
  className: PropTypes.string,
  hOSTELS: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propGap: PropTypes.any,
};

export default HostelNameContainer;
