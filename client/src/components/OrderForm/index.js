import React from "react";
import { Container, Row, Col } from "../Grid";
import { Button } from "react-bootstrap";
import FormSelect from "../FormSelect";
import "./index.css";

class OrderForm extends React.Component {
  state = {
    orderedItems: [],
    activeTable: undefined,
    activeBill: undefined,
    tables: []
  };

  componentDidMount = () => {
    console.log(this.props.tables);
    if (this.props.items) {
      this.setState({
        orderedItems: this.props.items
      });
    }
    if (this.props.tableNum) {
      this.setState({
        activeTable: this.props.activeTable
      });
    }
    if (this.props.tables) {
      this.setState({
        tables: this.props.tables
      });
    }
  };

  removeItem = (index) => {
    let items = this.state.orderedItems;
    items.splice(index, 1);
    this.setState({
      oderedItems: items
    });
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
    console.log(this.state.tables);
    // let bill = this.state.tables[tableIndex].Bill;
    // if (bill) {
    //   this.setState({
    //     activeBill: bill
    //   });
    // }
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
              {this.props.items.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <span onClick={(i) => this.removeItem(i)}>- </span>{" "}
                      {item.name}
                    </td>
                    <td className="text-right">{item.price}</td>
                  </tr>
                );
              })}
              {this.state.activeBill && (
                <div className="activeBill">
                  <tr>Current Bill: {this.state.activeBill.amountCharged}</tr>
                  <tr>Amount Paid: {this.state.activeBill.amountPaid}</tr>
                </div>
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
                onClick={(e) =>
                  this.props.saveTicket(e, this.state.activeTable)}>
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
