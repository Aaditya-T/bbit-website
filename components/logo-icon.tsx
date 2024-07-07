import PropTypes from "prop-types";

const LogoIcon = ({ className = "" }) => {
  return (
    <img
      className={`h-[59px] w-[117.4px] relative ${className}`}
      loading="lazy"
      alt=""
      src="/logo.svg"
    />
  );
};

LogoIcon.propTypes = {
  className: PropTypes.string,
};

export default LogoIcon;
