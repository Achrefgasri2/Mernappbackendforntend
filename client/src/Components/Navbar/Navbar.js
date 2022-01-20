import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFalse } from "../../JS/Actions/Actions";
import {Navbar , Container , Nav } from 'react-bootstrap';
const Navbarr = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MERN App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Mongo</Nav.Link>
              <Nav.Link href="#action2">ExpressJs</Nav.Link>
              <Nav.Link href="#action1">ReactJs</Nav.Link>
              <Nav.Link href="#action2">NodeJS</Nav.Link>
            </Nav>
      
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Link to="/">
        <Button variant="secondary">Contact List</Button>
      </Link>
      <Link to="/addContact">
        <Button onClick={() => dispatch(toggleFalse())} variant="secondary">
          Add Contact
        </Button>
      </Link>
    </header>
  );
};

export default Navbarr;
