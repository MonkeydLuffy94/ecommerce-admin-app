import React from "react";
import { Form } from "react-bootstrap";

export const InputBox = ({
  id,
  label,
  errorMessage,
  required,
  type,
  ...props
}) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{`${label}${required ? "*" : ""}`}</Form.Label>
      <Form.Control {...props} />
      {errorMessage ? (
        <Form.Text className="text-muted">{errorMessage}</Form.Text>
      ) : null}
    </Form.Group>
  );
};

export const FileUpload = ({ errorMessage, ...props }) => {
  return (
    <Form.Group>
      <Form.File {...props} />
      {errorMessage ? (
        <Form.Text className="text-muted">{errorMessage}</Form.Text>
      ) : null}
    </Form.Group>
  );
};
