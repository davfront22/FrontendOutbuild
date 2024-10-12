import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import CustomButton from "components/Common/Button";
import CommentsTable from "./CommentTable";
import CommentModal from "./CommentModal";
import LoadingSpinner from "components/Common/Spinner";
import { MODAL_CLOSE_TIMEOUT } from "utils/constants";
import { totalComments } from "utils/constants";

const CommentsList = ({ comments, loadMore, loading }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const handleShowModal = (comment) => {
    setSelectedComment(comment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setSelectedComment(null);
    }, MODAL_CLOSE_TIMEOUT);
  };

  const hasMoreComments = comments.length < totalComments;

  return (
    <Container>
      <Card className="mb-3">
        <Card.Body className="max-height-400 overflow-auto p-0">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <CommentsTable comments={comments} onClick={handleShowModal} />
          )}
        </Card.Body>
        <Container>
          <Row className="justify-content-center my-2">
            <Col xs="auto">
              <CustomButton
                disabled={loading}
                onClick={!loading && hasMoreComments ? loadMore : undefined}
              >
                {loading
                  ? "Loading..."
                  : hasMoreComments
                  ? "Load More"
                  : "No more comments to display."}
              </CustomButton>
            </Col>
          </Row>
        </Container>
      </Card>
      {/* Modal Component */}
      <CommentModal
        show={showModal}
        handleClose={handleCloseModal}
        comment={selectedComment}
      />
    </Container>
  );
};

export default CommentsList;
