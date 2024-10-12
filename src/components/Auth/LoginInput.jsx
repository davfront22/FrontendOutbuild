import React from "react";
import PropTypes from "prop-types";
import { Form, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormInput = ({
  label,
  type = "text",
  id,
  value,
  onChange,
  placeholder,
  isInvalid,
  errorMessage,
  showToggleIcon = false,
  showPassword,
  onTogglePassword,
}) => {
  return (
    <Form.Group controlId={id} className="mt-2">
      <Form.Label>{label}</Form.Label>
      {showToggleIcon ? (
        <InputGroup>
          <Form.Control
            type={showPassword ? "text" : type}
            value={value}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            isInvalid={isInvalid}
          />
          <InputGroup.Text
            onClick={onTogglePassword}
            style={{ cursor: "pointer" }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </InputGroup.Text>
        </InputGroup>
      ) : (
        <>
          <Form.Control
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            isInvalid={isInvalid}
          />
          {isInvalid && (
            <Form.Control.Feedback type="invalid">
              {errorMessage}
            </Form.Control.Feedback>
          )}
        </>
      )}
    </Form.Group>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isInvalid: PropTypes.bool,
  errorMessage: PropTypes.string,
  showToggleIcon: PropTypes.bool,
  showPassword: PropTypes.bool,
  onTogglePassword: PropTypes.func,
};

export default FormInput;
