import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CommentsStyles.css";
import { Modal, Toast } from "react-bootstrap";
import CommentDetail from "components/CommentsList/CommentsDetails";
import CustomButton from "components/Common/Button";
import LoadingSpinner from "components/Common/Spinner";
import { handleCopyToClipboard } from "utils/helpers";
import texts from "../../assets/texts.json";
import { FaClipboard } from "react-icons/fa";
import { commentDetails } from "utils/commmentUtils";
import { TOAST_CLOSE_TIMEOUT } from "utils/constants";

const CommentModal = ({ show, handleClose, comment }) => {
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = () => {
    handleCopyToClipboard(comment, setShowToast, TOAST_CLOSE_TIMEOUT);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{texts.detailsTitleMessage}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 pb-3 pt-0">
        {comment ? (
          <div className="mt-2">
            {commentDetails(comment).map((detail, index) => (
              <CommentDetail
                key={index}
                icon={detail.icon}
                label={detail.label}
                value={detail.value}
              />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </Modal.Body>
      <Modal.Footer>
        <CustomButton
          variant="outline-primary"
          onClick={copyToClipboard}
          className="d-flex align-items-center"
        >
          <FaClipboard className="me-1" />
          {texts.copytoclipboardMessage}
        </CustomButton>
      </Modal.Footer>

      {/* Toast Notification */}
      <Toast
        bg="secondary"
        onClose={() => setShowToast(false)}
        show={showToast}
        className="toast-position"
      >
        <Toast.Body className="text-white">
          {texts.confirmationlipboardMessage}
        </Toast.Body>
      </Toast>
    </Modal>
  );
};

CommentModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default CommentModal;
