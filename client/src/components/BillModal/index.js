import React from "react";
import Modal from "react-bootstrap/Modal";
import OrderForm from "../OrderForm";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import "./index.css";

class BillModal extends React.Component {
  state = {
    activeTable: undefined,
    tables: undefined,
    show: false
  };

  componentDidMount = () => {
    if (this.props.activeTable) {
      this.setState({ activeTable: this.props.activeTable });
    }
    if (this.props.tables) {
      this.setState({ tables: this.props.tables });
    }
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.tables !== this.props.tables) {
      this.setState({ tables: this.props.tables });
    }
    if (prevProps.activeTable !== this.props.activeTable) {
      this.setState({ activeTable: this.props.activeTable });
    }
  };

  saveTicket = (tableIndex, newBill) => {
    if (tableIndex < 0) {
      console.log("No Table Selected");
      return;
    }
    let restId = this.props.restId;
    API.updateTableBill(restId, tableIndex, newBill).then((result) => {
      this.setState({ orderedItems: [] });
    });
  };

  billPaid = (tableIndex, receipt) => {
    let restId = this.props.restId;
    API.billPaid(restId, tableIndex, receipt).then((result) => {
      this.setState({ orderedItems: [] });
    });
  };

  newBill = (tableIndex, newBill) => {
    let restId = this.props.restId;
    API.archiveBill(restId, tableIndex, newBill);
    API.getRestaurants().then((restaurants) => {
      const restaurant = restaurants.data[0];
      this.setState({
        tables: restaurant.Tables
      });
    });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  render () {
    const myStyles = {
      buttons: {
        margin: "10px",
        fontSize: "1.3rem",
        display: "flex",
        justifyContent: "center"
      }
    };

    return (
      <div id="BillModalContainer">
        <Button
          variant="warning"
          type="button"
          style={myStyles.buttons}
          onClick={() => this.handleShow()}>
          Get Check
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleHide()}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton />
          <Modal.Body id="GetCheckModal">
            <OrderForm
              tables={this.state.tables}
              saveTicket={this.saveTicket}
              billPaid={this.billPaid}
              newBill={this.newBill}
              activeTable={this.state.activeTable}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" onClick={() => this.handleHide()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default BillModal;
