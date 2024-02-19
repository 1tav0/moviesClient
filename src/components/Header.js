import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button  from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid
        // style={{ "backgroundColor": "red" }}
      >
        <Navbar.Brand href='/'
          style={{
            "color": "gold",
            // "backgroundColor": "blue"
          }}
        >
          <FontAwesomeIcon icon={faVideoSlash} /> Gold
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'
        style={{
          // "backgroundColor": "orange"
          }}
        >
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{
              "maxHeight": "100px",
              // "backgroundColor": "purple"
            }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
          </Nav>
          <Button variant="outline-info" className="me-2">Login</Button>
          <Button variant="outline-info">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;