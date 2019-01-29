import React from "react";

class ListItem extends React.Component {
  render () {
    return <li className="list-group-item">{this.props.children}</li>;
  }
}
export default ListItem;
