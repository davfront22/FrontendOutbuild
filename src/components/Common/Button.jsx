import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const CustomButton = ({ children, variant = "primary", onClick, disabled }) => (
  <>
    <Button size="md" variant={variant} onClick={onClick} disabled={disabled} >
      {children}
    </Button>
  </>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
