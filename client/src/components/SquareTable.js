import React from "react";
import "tables.css";

class SquareTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button className="button square">{this.props.text}</button>
      </div>
    );
  }
}

export default SquareTable;
