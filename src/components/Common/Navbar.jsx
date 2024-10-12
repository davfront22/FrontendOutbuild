import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import CustomButton from "./Button";
import { useAuth } from "contexts/AuthContext";
import Routes from "utils/routes";
import texts from "../../assets/texts.json";


const NavigationBar = ({ user }) => {
  const { logout } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href={Routes.HOME}>
          {user ? texts.proDashboard : ""}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" />
          <Nav className="ms-auto">
            {user ? (
              <>
                {/* Logout button */}
                <CustomButton variant="outline-primary" onClick={logout}>
                  {texts.logoutMessage}
                </CustomButton>
              </>
            ) : (
              <Nav.Link href={Routes.HOME}></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
