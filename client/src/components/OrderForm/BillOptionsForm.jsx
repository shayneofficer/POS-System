import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Row, Col } from "../Grid";

class BillOptionsForm extends React.Component {
  state = {
    activeBill: this.props.activeBill,
    amountPaid: undefined,
    amountCharged: undefined,
    isSplit: false,
    splitNum: 1
  };

  componentDidUpdate (prevProps) {
    if (this.props.activeBill !== prevProps.activeBill) {
      if (this.props.activeBill) {
        this.setState({
          activeBill: this.props.activeBill,
          amountPaid: this.props.activeBill.amountPaid,
          amountCharged: this.props.activeBill.amountCharged
        });
      }
    }
  }

  changePaid = (event) => {
    this.setState({
      amountPaid: event.target.value
    });
  };

  changeIsSplit = (event) => {
    this.setState({
      isSplit: event.target.checked
    });

    if (!event.target.checked) {
      this.setState({
        splitNum: 1
      });
    }
  };

  changeSplitNum = (event) => {
    this.setState({
      splitNum: event.target.value
    });
  };

  changeCharged = (event) => {
    this.setState({
      amountCharged: event.target.value
    });
  };

  handleSubmit = (e, activeTable) => {
    e.preventDefault();
    if (this.state.amountPaid >= this.state.amountCharged) {
      let bill = this.props.activeBill;
      bill.amountPaid = this.state.amountPaid;
      bill.amountCharged = this.state.amountCharged;
      bill.dateUpdated = new Date(Date.now());
      bill.isPaid = true;
      this.props.billPaid(activeTable, bill);
    } else {
      let bill = this.props.activeBill;
      bill.amountPaid = this.state.amountPaid;
      bill.amountCharged = this.state.amountCharged;
      bill.dateUpdated = new Date(Date.now());
      bill.isPaid = false;
      this.props.saveTicket(activeTable, bill);
    }
  };

  render () {
    let isSplit = !this.state.isSplit;

    return (
      <div className="collapse" id="billOptionsForm">
        <Form>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Checkbox
                  aria-label="Split Check"
                  onClick={(e) => this.changeIsSplit(e)}
                />
                <InputGroup.Text>Split</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="number"
                onChange={(e) => this.changeSplitNum(e)}
                disabled={isSplit}
                value={this.state.splitNum}
                placeholder=""
                className="text-center"
              />
              <InputGroup.Append>
                <InputGroup.Text>Ways</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text className="fixedSize">
                  Amount Paid
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="number"
                placeholder={this.state.amountPaid}
                onChange={(e) => this.changePaid(e)}
                className="text-right"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text className="fixedSize">
                  Amount Charged
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="number"
                placeholder={this.state.amountCharged}
                onChange={(e) => this.changeCharged(e)}
                className="text-right"
              />
            </InputGroup>
            <Col size="sm-12">
              <Button
                className="orderBtn"
                disabled={this.props.tableSelected}
                variant="default"
                type="submit"
                onClick={(e) => this.handleSubmit(e, this.props.activeTable)}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default BillOptionsForm;
