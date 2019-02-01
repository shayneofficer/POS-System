import React from "react";
import Table from "react-bootstrap/Table";

const myStyles = {
  table: {
    width: "10%",
    marginLeft: "20px",
    marginRight: "90px",
    marginTop: "40px",
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
            <th> Server #</th>
            <th> Server Name</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: "rebeccapurple", color: "white" }}>
            <td>1</td>
            <td>Jenny</td>
          </tr>
          <tr style={{ backgroundColor: "darkblue", color: "white" }}>
            <td>2</td>
            <td>Tom</td>
          </tr>
          <tr style={{ backgroundColor: "darkgreen", color: "white" }}>
            <td>3</td>
            <td>Steve</td>
          </tr>
          <tr style={{ backgroundColor: "darkorange", color: "white" }}>
            <td>4</td>
            <td>Angie</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ServerKey;
