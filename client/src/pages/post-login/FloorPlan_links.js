import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
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
      <div className={`${hidden ? "d-none" : ""}`}>
        <Link to={"/register/user"}>
          <Button
            variant="link"
            style={{ margin: "10px", color: "black", fontSize: "1.3rem" }}
          >
            Create New User
          </Button>
        </Link>
      </div>
    );
  }
}

export default FloorPlan_links;
