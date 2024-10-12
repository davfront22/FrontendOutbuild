import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";
import { ALERT_CLOSE_TIMEOUT } from "utils/constants";

const AlertMessage = ({
  variant = "danger",
  message,
  showInitially = false,
}) => {
  const [show, setShow] = useState(showInitially);

  useEffect(() => {
    if (message) {
      setShow(true);
    }
  }, [message]);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), ALERT_CLOSE_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <>
      {show && (
        <Alert key={variant} variant={variant}>
          {message}
        </Alert>
      )}
    </>
  );
};

AlertMessage.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string.isRequired,
  showInitially: PropTypes.bool,
};

AlertMessage.defaultProps = {
  variant: "danger",
  showInitially: false,
};
export default AlertMessage;
