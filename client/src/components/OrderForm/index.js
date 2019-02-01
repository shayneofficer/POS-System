import React from "react";
import { Row } from "../Grid";
import Button from "react-bootstrap/Button";
import FormSelect from "../FormSelect";
import "./index.css";
import BillOptionsForm from "./BillOptionsForm";

class OrderForm extends React.Component {
  state = {
    activeTable: undefined,
    activeBill: undefined
  };

  componentDidMount = () => {
    if (this.props.orderedItems) {
      this.setState({
        orderedItems: this.props.orderedItems
      });
    }
    if (this.props.activeTable) {
      this.setState({
        activeTable: this.props.activeTable
      });
    }
  };

  changeTable = (event) => {
    if (event.target.value >= 0) {
      this.getTableBill(event.target.value);
      this.setState({
        activeTable: event.target.value
      });
    } else {
      this.setState({
        activeTable: undefined
      });
    }
  };

  getTableBill = (tableIndex) => {
    const bill = this.props.tables[tableIndex].Bill;
    if (bill) {
      this.setState({
        activeBill: bill
      });
    } else {
      const newBill = {
        isPaid: false,
        amountCharged: 0,
        amountPaid: 0
      };
      this.setState({
        activeBill: newBill
      });
    }
  };

  handleSave = (e, tableIndex) => {
    e.preventDefault();
    if (this.state.activeBill) {
      var newBill = this.state.activeBill;
    } else {
      var newBill = {
        amountCharged: 0,
        amountPaid: 0,
        isPaid: false,
        dateAdded: new Date(Date.now()),
        dateUpdated: new Date(Date.now())
      };
    }
    let orderSum = 0;
    this.props.orderedItems.map((item) => {
      orderSum += item.price;
    });
    newBill.amountCharged += orderSum;
    this.props.saveTicket(tableIndex, newBill);
    this.setState({
      activeBill: newBill
    });
  };

  newBill = () => {
    let tableIndex = this.state.activeTable;
    const newBill = {
      amountCharged: 0,
      amountPaid: 0,
      isPaid: false,
      dateAdded: new Date(Date.now())
    };
    this.props.newBill(tableIndex, newBill);
    this.getTableBill(tableIndex);
  };
  render () {
    let tableSelected = false;
    this.state.activeTable ? (tableSelected = false) : (tableSelected = true);
    return (
      <div className="orderForm">
        <Row>
          <div className="inlineContainer">
            <div className="inline">
              <h5 className="mb-0">Ticket for Table: </h5>
            </div>
            <div className="inlineSelect">
              <FormSelect
                tables={this.props.tables}
                active={this.state.activeTable}
                handleSelect={this.changeTable}
              />
            </div>
          </div>
        </Row>
        <table>
          <tbody className="text-left">
            {this.props.orderedItems && (
              <tr>
                <th>Item</th>
                <th className="text-right">Cost</th>
              </tr>
            )}
            {this.props.orderedItems &&
              this.props.orderedItems.map((item, i) => {
                return (
                  <tr key={i}>
                    <td className="item-name">
                      <span onClick={(i) => this.props.removeItem(i)}>
                        -{" "}
                      </span>{" "}
                      {item.name}
                    </td>
                    <td className="text-right item-price">{item.price}</td>
                  </tr>
                );
              })}
            {this.state.activeBill && (
              <tr className="border-top">
                <td className="text-bold">Current Bill: </td>
                <td className="text-right">
                  {this.state.activeBill.amountCharged}
                </td>
              </tr>
            )}
            {this.state.activeBill && (
              <tr>
                <td className="text-bold">Amount Paid: </td>
                <td className="text-right">
                  {this.state.activeBill.amountPaid}
                </td>
              </tr>
            )}
            {this.state.activeBill && (
              <tr>
                <td className="text-bold">Balance Due: </td>
                <td className="text-right">
                  {this.state.activeBill.amountCharged -
                    this.state.activeBill.amountPaid}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="orderBtnContainer">
          {this.props.orderedItems && (
            <Button
              className="orderBtn"
              disabled={tableSelected}
              variant="warning"
              type="submit"
              onClick={(e) => this.handleSave(e, this.state.activeTable)}>
              Update Items
            </Button>
          )}

          <button
            className="btn btn-default orderBtn"
            type="button"
            data-toggle="collapse"
            data-target="#billOptionsForm"
            aria-expanded="false"
            aria-controls="billOptionsForm">
            Payment
          </button>
        </div>
        <BillOptionsForm
          activeBill={this.state.activeBill}
          tableSelected={tableSelected}
          activeTable={this.state.activeTable}
          billPaid={this.props.billPaid}
          saveTicket={this.props.saveTicket}
        />
        <div className="orderBtnContainer">
          <Button
            variant="outline-danger"
            disabled={tableSelected}
            className="newTicketBtn"
            onClick={() => this.newBill()}>
            New Ticket
          </Button>
        </div>
      </div>
    );
  }
}

export default OrderForm;
