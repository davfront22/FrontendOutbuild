import React from "react";
import { Spinner } from "react-bootstrap";
import texts from "../../assets/texts.json";

const LoadingSpinner = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Spinner variant="primary" animation="border" />
      <span className="mt-2">{texts.loadingMessage}</span>
    </div>
  );
};

export default LoadingSpinner;
