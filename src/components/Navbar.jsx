import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBeer } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineLogin } from "react-icons/md";
import "./NavBarStyles.css";
import { Link } from "react-router-dom";
// MdOutlineLogin
// to import the corresponding css
import { Button, Nav, Navbar, Container } from "react-bootstrap";

function Navigater() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Navbar
      expand="md"
      sticky="top"
      className=" NavBarItems"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home">
          <FaBeer />
          Sloppy
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="Nav_components">
              <Link to="/" onClick={() => setExpanded(false)}>
                <BsFillHouseFill /> Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#link" className="Nav_components">
              <Link to="/About" onClick={() => setExpanded(false)}>
                <BsFillInfoSquareFill /> About
              </Link>
            </Nav.Link>
            <Nav.Link href="#service" className="Nav_components">
              <FiSettings />{" "}
              <Link to="ContactUs" onClick={() => setExpanded(false)}>
                Service
              </Link>
            </Nav.Link>
            <Button
              bsStyle="primary"
              style={{ marginRight: "3px", borderRadius: "13px" }}
              className="Nav_components"
            >
              <AiOutlineLogin />
              Login
            </Button>
            <Button
              style={{ backgroundColor: "green", borderRadius: "13px" }}
              className="Nav_components"
              id="signup"
            >
              <MdOutlineLogin />
              Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigater;

// BsFillHouseFill
