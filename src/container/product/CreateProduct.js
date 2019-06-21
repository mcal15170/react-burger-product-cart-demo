import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default class CreateProduct extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      txtPhoto: "",
      txtTitle: "",
      txtPrice: 0,
      txtQuentity: 0,
      txtDesc: "",
      error: "",
      fileSize: 0,
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true, error: "" });
  }

  isValid = () => {
    const { fileSize, txtDesc, txtPrice, txtQuentity, txtTitle } = this.state;
    if (fileSize > 100000) {
      this.setState({ error: "Error : File size should be less than 100kb !" });
      return false;
    }

    if (
      txtDesc.length === 0 ||
      txtPrice.length === 0 ||
      txtQuentity.length === 0 ||
      txtTitle.length === 0
    ) {
      this.setState({ error: "Error : All Fields is required !" });
      return false;
    }

    return true;
  };

  onChangeInputHandler = event => {
    this.setState({ error: "" });
    const value =
      event.target.name === "txtPhoto"
        ? event.target.files[0]
        : event.target.value;
    const fileSize =
      event.target.name === "txtPhoto" ? event.target.files[0].size : "";
    this.setState({
      [event.target.name]: value,
      fileSize
    });
  };

  saveProduct = () => {
    const [txtTitle, txtDesc, txtPrice, txtPhoto, txtQuentity] = this.state;
    if (this.isValid()) {
      this.setState({ show: false });
      const productData = {
        id: 11,
        title: txtTitle,
        desc: txtDesc,
        price: txtPrice,
        qty: txtQuentity,
        img: txtPhoto
      };
    }
  };
  render() {
    return (
      <div className="col-md-12  border border-primary mb-3 pr-0">
        <button
          style={{ height: "100%", float: "right" }}
          type="button"
          onClick={this.handleShow}
          className="btn btn-primary"
        >
          Add New Product
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <p className="text-primary">Add New Product</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                {this.state.error && (
                  <span className="alert alert-danger" role="alert">
                    <i className="fa fa-exclamation-triangle" />
                    &nbsp;
                    {this.state.error}
                  </span>
                )}
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">
                  Product Image
                </Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  name="txtPhoto"
                  onChange={this.onChangeInputHandler}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">Title</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.txtTitle}
                  name="txtTitle"
                  onChange={this.onChangeInputHandler}
                  className="form-control"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">Price</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.txtPrice}
                  name="txtPrice"
                  onChange={this.onChangeInputHandler}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="text-secondary">Quentity</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.txtQuentity}
                  name="txtQuentity"
                  onChange={this.onChangeInputHandler}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="text-secondary">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  value={this.state.txtDesc}
                  rows="3"
                  name="txtDesc"
                  onChange={this.onChangeInputHandler}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              variant="secondary"
              className="btn btn-danger"
              onClick={this.handleClose}
            >
              Close
            </button>
            <button
              variant="primary"
              className="btn btn-primary"
              onClick={this.saveProduct}
            >
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
