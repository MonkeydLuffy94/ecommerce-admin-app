import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { InputBox } from "../../components/ui";
import { register } from "../../actions/index";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [err, serErr] = useState("");

  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const registration = useSelector(state => state.register);

  const handleRegistration = e => {
    e.preventDefault();
    dispatch(register({ firstName, lastName, email, password }));
  };

  if (auth.authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <p>{registration.message}</p>
          </Col>
          <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
            <Form onSubmit={e => handleRegistration(e)}>
              <Row>
                <Col xs={12} md={6}>
                  <InputBox
                    id="formFirstName"
                    label="First name"
                    type="text"
                    placeholder="Enter first name"
                    required
                    onChange={e => setFirstName(e.target.value)}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <InputBox
                    id="formLastName"
                    label="Last name"
                    type="text"
                    placeholder="Enter last name"
                    required
                    onChange={e => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <InputBox
                id="formBasicEmail"
                label="Email address"
                type="email"
                placeholder="Enter email"
                required
                onChange={e => setEmail(e.target.value)}
              />
              <InputBox
                id="formBasicPassword"
                label="Password"
                type="password"
                placeholder="Enter password"
                required
                onChange={e => setPassword(e.target.value)}
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
