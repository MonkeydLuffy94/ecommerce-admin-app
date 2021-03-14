import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import InputBox from "../../components/ui/input/InputBox";

const Signin = props => {
  return (
    <Layout>
      <Container className="mt-5">
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <Form>
              <InputBox
                id="formBasicEmail"
                label="Email address"
                type="email"
                placeholder="Enter email"
              />
              <InputBox
                id="formBasicPassword"
                label="Password"
                type="password"
                placeholder="Password"
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
