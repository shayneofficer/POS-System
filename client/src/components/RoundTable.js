import React from "react";

class RoundTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button className="button round">{this.props.text}</button>
      </div>
    );
  }
}

export default RoundTable;
