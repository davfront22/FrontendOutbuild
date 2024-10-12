import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

const FormPrompt = ({
  title,
  infoText,
  infoLink,
  infoLinkText,
  policyText,
  policyLink,
  policyLinkText,
  position,
}) => {
  return (
    <Container className={`mt-${position === "above" ? "3" : "2"}`}>
      {title && <h3 className="text-center">{title}</h3>}
      {infoText && infoLink && (
        <div
          className={`text-center ${position === "above" ? "mt-3" : "mt-2"}`}
        >
          <span>{infoText} </span>
          <a href={infoLink} aria-label="Information">
            {infoLinkText}{" "}
          </a>
        </div>
      )}
      {policyText && policyLink && (
        <div className="text-center mt-2">
          <small>
            {policyText} <a href={policyLink}>{policyLinkText}</a>.
          </small>
        </div>
      )}
    </Container>
  );
};

FormPrompt.propTypes = {
  title: PropTypes.string,
  infoText: PropTypes.string,
  infoLink: PropTypes.string,
  infoLinkText: PropTypes.string,
  policyText: PropTypes.string,
  policyLink: PropTypes.string,
  policyLinkText: PropTypes.string,
  position: PropTypes.oneOf(["above", "below"]),
};

export default FormPrompt;
