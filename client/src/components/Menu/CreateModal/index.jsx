import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

class CreateModal extends React.Component {
  state = {
    show: false,
    itemName: "",
    itemPrice: 0,
    catName: ""
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.createType === "Item") {
      this.props.handleCreate(
        this.props.activeCat,
        this.state.itemName,
        this.state.itemPrice
      );
      this.setState({ show: false });
    } else {
      this.props.handleCreate(this.state.catName);
      this.setState({ show: false });
    }
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleHide = () => {
    this.setState({ show: false });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render () {
    return (
      <div className="CreateModalWrapper">
        <div className="justify-content-center">
          {this.props.createType === "Item" ? (
            <Button
              id="addItemBtn"
              variant="light"
              onClick={() => this.handleShow()}>
              Add New Item
            </Button>
          ) : (
            <Button
              onClick={() => this.handleShow()}
              className="catBtn"
              id="addCatBtn"
              variant="outline-warning">
              Add Category
            </Button>
          )}
        </div>

        <Modal
          id="CreateModal"
          onHide={this.handleHide}
          show={this.state.show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create {this.props.createType}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {this.props.createType === "Item" ? (
                  <Row className="pv-0">
                    <Col sm={8}>
                      <Form.Control
                        type="input"
                        value={this.state.itemName}
                        name="itemName"
                        onChange={this.handleInputChange}
                        placeholder="Item Name"
                      />
                    </Col>
                    <Col sm={4}>
                      <Form.Control
                        value={this.state.itemPrice}
                        name="itemPrice"
                        onChange={this.handleInputChange}
                        type="number"
                        placeholder="Item Price"
                        className="text-right"
                      />
                    </Col>
                  </Row>
              ) : (
                <Row className="pv-0">
                    <Form.Control
                      type="input"
                      value={this.state.catName}
                      name="catName"
                      onChange={this.handleInputChange}
                      placeholder="Category Name"
                    />
                </Row>
              )}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <div className="justify-evenly">
              <Button
                type="button"
                variant="outline-danger"
                onClick={() => this.handleHide()}>
                Close
              </Button>
              <Button
                type="submit"
                variant="warning"
                onClick={(e) => this.handleSubmit(e)}>
                Submit
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CreateModal;
