import { Button } from "react-bootstrap";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, Redirect } from "react-router-dom";
import "./Header.css";
import { signout } from "../../actions";

const Header = props => {
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);

  const handleSignout = () => {
    dispatch(signout());
  };

  const renderNonLoggedInLinks = () => (
    <Nav as="ul">
      <Nav.Item as="li">
        <NavLink to="signin" className="nav-link">
          Login
        </NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <NavLink to="/signup" className="nav-link">
          Register
        </NavLink>
      </Nav.Item>
    </Nav>
  );

  const renderLoggedInLinks = () => (
    <Nav>
      <Nav.Item as="li">
        <Button variant="primary" size="sm" onClick={handleSignout}>
          Signout
        </Button>
      </Nav.Item>
    </Nav>
  );

  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="app-header">
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
        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
