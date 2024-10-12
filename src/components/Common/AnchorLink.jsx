import React from "react";
import PropTypes from "prop-types";

const AnchorLink = ({ href = "#", text, className = "", ...props }) => {
  return (
    <div className={`d-flex justify-content-between mb-2 mt-3 ${className}`}>
      <div />
      <div className="text-center">
        <a href={href} aria-label="Information" {...props}>
          {text}
        </a>
      </div>
    </div>
  );
};

AnchorLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default AnchorLink;
