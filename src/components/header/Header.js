import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = props => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Link to="/" className="navbar-brand">
        <h1 className="m-0">Admin Dashboard</h1>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </Nav.Item>
        </Nav>
        <Nav as="ul">
          <Nav.Item as="li">
            <NavLink to="signin" className="nav-link">
              Login
            </NavLink>
          </Nav.Item>
          <Nav.Item as="li">
            <NavLink to="/signup" className="nav-link">
              Signup
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
