import LogoIcon from "./logo-icon";
import PropTypes from "prop-types";

const ContentBlock = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] ${className}`}
    >
      <LogoIcon />
      <nav className="m-0 w-[872.6px] flex flex-row items-start justify-start gap-[31.7px] max-w-full text-left text-13xl text-daisy-bush-950 font-outfit mq1275:hidden mq450:gap-[16px]">
        <div className="w-[116.9px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
          <a className="[text-decoration:none] self-stretch relative font-semibold text-[inherit]">
            Home
          </a>
        </div>
        <a className="[text-decoration:none] flex-1 relative text-[inherit]">
          Admissions
        </a>
        <a className="[text-decoration:none] flex-1 relative text-[inherit]">
          Placements
        </a>
        <div className="w-[118.1px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
          <a className="[text-decoration:none] self-stretch relative text-[inherit] whitespace-nowrap">{`About `}</a>
        </div>
        <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[116.3px]">
          Contact
        </a>
      </nav>
    </header>
  );
};

ContentBlock.propTypes = {
  className: PropTypes.string,
};

export default ContentBlock;
