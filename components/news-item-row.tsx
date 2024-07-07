import PropTypes from "prop-types";

const NewsItemRow = ({ className = "" }) => {
  return (
    <div
      className={`w-[577.4px] flex flex-col items-start justify-start gap-[30.4px] max-w-full text-left text-13xl text-daisy-bush-950 font-open-sans mq900:gap-[15px] ${className}`}
    >
      <div className="w-[481.7px] flex flex-row items-start justify-center gap-[19.9px] max-w-full mq900:flex-wrap">
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
    </div>
  );
};

NewsItemRow.propTypes = {
  className: PropTypes.string,
};

export default NewsItemRow;
