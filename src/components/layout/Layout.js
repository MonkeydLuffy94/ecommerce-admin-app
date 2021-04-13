import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";

const Layout = ({ sidebar, children }) => {
  return (
    <>
      <Header />
      {sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/orders">Orders</NavLink>
                </li>
                <li>
                  <NavLink to="/category">Category</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} className="admin-dashboard">
              {children}
            </Col>
          </Row>
        </Container>
      ) : (
        children
      )}
    </>
  );
};

export default Layout;
