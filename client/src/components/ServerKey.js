import React from "react";
import Table from "react-bootstrap/Table";

const myStyles = {
  table: {
    width: "20%",
    marginLeft: "10px",
    fontSize: "1rem",
    fontWeight: "400",
    textAlign: "center"
  }
};

class ServerKey extends React.Component {
  render() {
    return (
      <Table style={myStyles.table} striped bordered hover>
        <thead>
          <tr style={{ backgroundColor: "lightgrey" }}>
            <th colSpan="1">Server #</th>
            <th colSpan="1">Server Name</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "rebeccapurple", color: "white" }}>
            <td colSpan="1">1</td>
            <td colSpan="1">Jenny</td>
          </tr>
          <tr style={{ backgroundColor: "darkblue", color: "white" }}>
            <td colSpan="1">2</td>
            <td colSpan="1">Tom</td>
          </tr>
          <tr style={{ backgroundColor: "darkgreen", color: "white" }}>
            <td colSpan="1">3</td>
            <td colSpan="1">Steve</td>
          </tr>
          <tr style={{ backgroundColor: "darkorange", color: "white" }}>
            <td colSpan="1">4</td>
            <td colSpan="1">Angie</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ServerKey;
