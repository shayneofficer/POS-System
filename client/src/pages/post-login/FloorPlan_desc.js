import React from "react";
const myStyles = {
  key: {
    flexDirection: "column",
    width: "20%",
    marginLeft: "10px",
    fontSize: "1.5rem",
    fontWeight: "400",
    textAlign: "center"
  }
};

class FloorPlan_desc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={myStyles.key}>
        <div style={{ backgroundColor: "#00A82E" }}>Table Available</div>
        <div style={{ backgroundColor: "yellow" }}>Table Seated</div>
        <div style={{ backgroundColor: "orange" }}>Has Ordered</div>
        <div style={{ backgroundColor: "#cc00cc" }}>Food is Served</div>
        <div style={{ backgroundColor: "#00C5CD" }}>Needs Check</div>
        <div style={{ backgroundColor: "red" }}>Needs Bussing</div>
      </div>
    );
  }
}

export default FloorPlan_desc;
