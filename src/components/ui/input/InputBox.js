import React from "react";
import { Form } from "react-bootstrap";

const InputBox = ({
  id,
  label,
  type,
  placeholder,
  errorMessage,
  value,
  onChange,
  required,
}) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{`${label}${required ? "*" : ""}`}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errorMessage ? (
        <Form.Text className="text-muted">{errorMessage}</Form.Text>
      ) : null}
    </Form.Group>
  );
};

export default InputBox;
