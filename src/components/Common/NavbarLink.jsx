import React from "react";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

const NavbarIcon = ({ icon: Icon, text, href = "/" }) => {
  return (
    <Nav.Item>
      <Nav.Link href={href} className="d-flex align-items-center mr-2">
        <Icon size={25} className="me-2" />
        {text && <span className="ml-2">{text}</span>}
      </Nav.Link>
    </Nav.Item>
  );
};

NavbarIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string,
  href: PropTypes.string,
};

export default NavbarIcon;
