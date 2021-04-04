import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/layout/Layout";

import "./Home.css";

const Home = props => {

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">Sidebar</Col>
          <Col md={10} className="admin-dashboard">
            {/* <h2 className="text-center mt-5">Welcome to Admin Dashboard</h2> */}
            kkjbkbkj
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
