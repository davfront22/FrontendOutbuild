import React from "react";
import "./LayoutStyles.css";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "contexts/AuthContext";
import LoginPage from "pages/Login/login";
import DashboardPage from "pages/Dashboard/dashboard";
import NavigationBar from "components/Common/Navbar";

const MainLayout = () => {
  const { user } = useAuth();

  return (
    <div className="full-screen">
      <Container fluid className="container-fluid-custom">
        {user && <NavigationBar user={user} />}
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="inner-container">
              {user ? <DashboardPage /> : <LoginPage />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainLayout;
