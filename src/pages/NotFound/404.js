import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "components/Common/Button";
import Routes from "utils/routes";
import texts from "../../assets/texts.json";

const NotFoundPage = () => {
  const history = useHistory();

  const goHome = () => {
    history.push(Routes.HOME);
  };

  return (
    <Container className="not-found-container d-flex align-items-center justify-content-center">
      <Row className="text-center">
        <Col>
          <h2 className="display-4">{texts.status404}</h2>
          <p className="lead">{texts.message404}</p>
          <CustomButton variant="primary" onClick={goHome}>
            {texts.backHomeMessage}
          </CustomButton>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
