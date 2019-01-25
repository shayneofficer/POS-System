import { Component } from "react";
import Group from "./Group";
import API from "../../utils/API";

class Menu extends Component {
  state = {
    menu: [],
    categories: []
  };

  /** Get a menu from DB with the Id passed in props */
  getMenuItems = (menuId) => {
    API.getMenuById(menuId)
    .then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  };

  componentDidMount = () => {
    this.getMenuItems(this.props.menuId);
  };

  render () {
    return (
      <div className="menu">
        {/* <Group items={this.categories[0]} />
        <Group items={this.categories[1]} />
        <Group items={this.categories[3]} /> */}
        <h2>Menu Page</h2>
      </div>
    );
  }
}
export default Menu;
