import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import InputBox from "../../components/ui/input/InputBox";
import { login } from "../../actions/index";
import { Redirect } from "react-router-dom";

const Signin = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (auth.authenticate) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Container className="mt-5">
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <Form onSubmit={e => handleFormSubmit(e)}>
              <InputBox
                id="formBasicEmail"
                label="Email address"
                type="email"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
              />
              <InputBox
                id="formBasicPassword"
                label="Password"
                type="password"
                placeholder="Password"
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

export default Signin;
