import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../actions/index";
import Layout from "../../components/layout/Layout";
import { InputBox, FileUpload } from "../../components/ui";

const Category = () => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const dispatch = useDispatch();

  const category = useSelector(state => state.category);
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const renderCategories = categories => {
    let categoryList = [];
    for (const category of categories) {
      categoryList.push(
        <li key={category._id}>
          {category.name}
          {category.children.length ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return categoryList;
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push(
        <option key={category._id} value={category._id}>
          {category.name}
        </option>
      );
      if (category.children.length) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  const handleCategoryImage = e => {
    setCategoryImage(e.target.files[0]);
  };

  return (
    <Layout sidebar>
      <Container fluid>
        <Row>
          <Col>
            <p>Category</p>
            <Button variant="primary" onClick={handleShow}>
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>{renderCategories(category.categories)}</ul>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputBox
            id="add-category-name"
            type="text"
            placeholder="Category Name"
            label="Category Name"
            value={categoryName}
            onChange={e => setCategoryName(e.target.value)}
            required
          />
          <select
            className="form-control"
            value={parentCategoryId}
            onChange={e => setParentCategoryId(e.target.value)}
          >
            {createCategoryList(category.categories)}
          </select>
          <FileUpload
            id="upload-file"
            label="Upload image"
            value={categoryImage}
            onChange={e => handleCategoryImage(e)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Category;
