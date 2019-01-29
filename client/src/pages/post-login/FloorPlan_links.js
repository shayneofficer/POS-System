import React from "react";
const myStyles = {
  links: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: "10px",
    marginLeft: "10px"
  }
};

class FloorPlan_links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let hidden = true;
    if (this.props.roleView === "manager") {
      hidden = false;
    }
    return (
      <div style={myStyles.links} className={`${hidden ? "d-none" : ""}`}>
        <div>
          <a href="#" style={{ margin: "10px" }}>
            Create New User
          </a>
        </div>
        <div>
          <a href="#">Delete User</a>
        </div>
      </div>
    );
  }
}

export default FloorPlan_links;
