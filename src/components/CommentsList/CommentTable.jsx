import React from "react";
import PropTypes from "prop-types";
import './CommentsStyles.css';
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import CustomButton from "components/Common/Button";
import texts from "../../assets/texts.json"

const CommentsTable = ({ comments, onClick }) => {
  return (
    <div className="scrollable-container">
      <Table striped bordered hover responsive className="styled-table">
        <thead className="sticky-header">
          <tr>
            <th>{texts.idTitle}</th>
            <th>{texts.nameTitle}</th>
            <th>{texts.emailTitle}</th>
            <th>{texts.actionsTitle}</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td className="text-center">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${comment.id}`}>
                      {texts.viewDetails}
                    </Tooltip>
                  }
                >
                  <CustomButton
                    aria-label="View comment details"
                    variant="outline-primary"
                    onClick={() => onClick(comment)}
                  >
                    <FaEye />
                  </CustomButton>
                </OverlayTrigger>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

CommentsTable.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CommentsTable;
