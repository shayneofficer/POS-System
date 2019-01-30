import React from "react";
import "./List.css";

class List extends React.Component {
  render () {
    return (
      <div className="list-overflow-container" key={this.props.key}>
        <ul className="list-group">{this.props.children}</ul>
      </div>
      
    );
  }
}

export default List;
