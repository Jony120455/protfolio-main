import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navber.css'
import jony from "../../jony1.png"
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <Navbar className="nav" bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img className="img" src={jony} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 nav-item"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link>
          <Link to ="/home">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/projects">Projects</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to ="/contact">Contact</Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navber;