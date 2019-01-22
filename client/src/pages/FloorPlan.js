import React from "react";
import RoundTable from "../components/RoundTable";
import SquareTable from "../components/SquareTable";
import SeverStation from "../components/ServerStation";

class FloorPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <RoundTable />
        <SquareTable />
        <ServerStation />
      </div>
    );
  }
}

export default FloorPlan;
