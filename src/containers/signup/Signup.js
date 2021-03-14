import React from "react";
import Layout from "../../components/layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import InputBox from "../../components/ui/input/InputBox";

const Signup = () => {
  return (
    <Layout>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col xs={12} md={6}>
                  <InputBox
                    id="formFirstName"
                    label="First name"
                    type="text"
                    placeholder="Enter first name"
                    value=""
                  />
                </Col>
                <Col xs={12} md={6}>
                  <InputBox
                    id="formLastName"
                    label="Last name"
                    type="text"
                    placeholder="Enter last name"
                  />
                </Col>
              </Row>
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
                placeholder="Enter password"
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

export default Signup;
