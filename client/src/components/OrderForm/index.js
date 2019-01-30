import React from "react";
import { Container, Row, Col } from "../Grid";
import { Button } from "react-bootstrap";
import FormSelect from "../FormSelect";
import "./index.css";

class OrderForm extends React.Component {
  state = {
    activeTable: undefined,
    activeBill: undefined,
  };

  componentDidMount = () => {
    if (this.props.items) {
      this.setState({
        orderedItems: this.props.items
      });
    }
    if (this.props.activeTable) {
      this.setState({
        activeTable: this.props.activeTable
      });
    }
    if (this.props.orderedItems) {
      this.setState({
        orderedItems: this.props.orderedItems
      })
    }
  };

  changeTable = (event) => {
    if (event.target.value >= 0) {
      this.getTableBill(event.target.value);
      this.setState({
        activeTable: event.target.value,
      });
    } else {
      this.setState({
        activeTable: undefined
      });
    }
  };

  getTableBill = (tableIndex) => {
    let bill = this.props.tables[tableIndex].Bill;
    if (bill) {
      this.setState({
        activeBill: bill
      });
    }
  };

  handleSave = (e, activeTable) => {
    if (this.state.activeBill) {
      var newBill = this.state.activeBill;
    } else {
      var newBill = {
        amountCharged: 0,
        amountPaid: 0,
        isPaid: false,
        dateAdded: new Date(Date.now()),
        dateUpdated: new Date(Date.now())
      }
    }
    let orderSum = 0;
    this.props.orderedItems.map((item) => {
      orderSum += item.price;
    });
    // console.log(this.state.activeBill);
    newBill.amountCharged += orderSum;
    this.props.saveTicket(e, activeTable, newBill);
    this.setState({
      activeBill: newBill,
    });
  };

  render () {
    let tableSelected = false;
    this.state.activeTable ? (tableSelected = false) : (tableSelected = true);
    return (
      <div className="box orderForm">
        <Container>
          <Row>
            <div className="inlineContainer">
              <div className="inline">
                <h5>Ticket for Table: </h5>
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
              <tr>
                <th>Item</th>
                <th className="text-right">Cost</th>
              </tr>
              {this.props.orderedItems.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <span onClick={(i) => this.props.removeItem(i)}>- </span>{" "}
                      {item.name}
                    </td>
                    <td className="text-right">{item.price}</td>
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
          <Row>
            <div className="orderBtnContainer">
              <Button
                className="orderBtn"
                disabled={tableSelected}
                variant="default"
                onClick={() => this.props.billPaid(this.state.activeTable)}>
                Bill Paid
              </Button>

              <Button
                className="orderBtn"
                disabled={tableSelected}
                variant="warning"
                onClick={(e) => this.handleSave(e, this.state.activeTable)}>
                Save Ticket
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OrderForm;
