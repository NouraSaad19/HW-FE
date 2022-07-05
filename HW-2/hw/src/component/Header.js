import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import {Navbar,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';




function Header() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href='./HomePage'>IMAGECARDS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/Cards">CARDS</Nav.Link>
          <Nav.Link as={NavLink} to="/About">ABOUT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <br />

  </div>
  );
}

export default Header;
