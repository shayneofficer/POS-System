import React from "react";
import { Container, Row, Col } from "../Grid";
import { Button } from "react-bootstrap";
import FormSelect from "../FormSelect";
import "./index.css";

class OrderForm extends React.Component {
  state = {
    orderedItems: [],
    activeTable: undefined
  };

  componentDidMount = () => {
    if (this.props.items) {
      this.setState({
        orderedItems: this.props.items
      });
    }
    if (this.props.tableNum) {
      this.setState({
        activeTable: this.props.tableNum
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
      this.setState({
        activeTable: event.target.value
      });
    } else {
      this.setState({
        activeTable: undefined
      });
    }
  };

  render () {
    let tableSelected = false;
    this.state.activeTable ? (tableSelected = false) : (tableSelected = true);
    return (
      <div className="box">
        <Container>
          <Row>
            <div className="inlineContainer">
              <div className="inline">
                <h5>Ticket for Table: </h5>
              </div>
              <div className="inlineSelect">
                <FormSelect
                  options={this.props.tables}
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
            </tbody>
          </table>
          <Row>
            <Button
              className="catBtn"
              disabled={tableSelected}
              variant="warning"
              onClick={(e) => this.props.saveTicket(e, this.state.activeTable)}>
              Save Ticket
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OrderForm;
