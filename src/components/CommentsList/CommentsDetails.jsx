import React from "react";
import PropTypes from "prop-types";

const CommentDetail = ({ icon, label, value }) => {
  return (
    <div
      className="mb-3"
    >
      <div className="d-flex align-items-center">
        {icon && <span className="me-2">{icon}</span>}
        <strong>{label}</strong>
      </div>
      <p className="ms-3 mt-1">{value}</p>
    </div>
  );
};

CommentDetail.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CommentDetail;
