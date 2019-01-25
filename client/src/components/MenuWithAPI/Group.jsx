import { Component } from "react";
import List from './List';
import Item from './Item';

class Group extends Component {
  render () {
    return (
      <div className="menu-group">
        <List>
          {this.props.items.map((i) => {
            <Item key={item._id}/>;
          })}
        </List>
      </div>
    );
  }
}
export default Group;
