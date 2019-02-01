import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const styles = {
  input: {
    width: "200px"
  }
};

class ReservationRows extends Component {
  render() {
    console.log("RR props", this.props);
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.date}</td>
        <td>{this.props.time}</td>
        <td>{this.props.partySize}</td>
        <td>
          <InputGroup className="mb-3" size="md" style={styles.input}>
            <FormControl
              placeholder="table #"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="warning" type="submit">
                Submit
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </td>
        <td>
          <InputGroup className="mb-3" size="md" style={styles.input}>
            <FormControl
              placeholder="Server Name"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="warning" type="submit">
                Submit
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </td>
      </tr>
    );
  }
}

export default ReservationRows;
