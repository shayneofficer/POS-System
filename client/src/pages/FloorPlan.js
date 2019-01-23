import React from "react";
import RoundTable from "../components/RoundTable";
import SquareTable from "../components/SquareTable";
import ServerStation from "../components/ServerStation";

class FloorPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <RoundTable tableNumber={1} shape={"round"} />
        <RoundTable text={"2"} />
        <RoundTable text={"3"} />
        <SquareTable text={"4"} />
        <SquareTable text={"5"} />

        <ServerStation />
      </div>
    );
  }
}

export default FloorPlan;
