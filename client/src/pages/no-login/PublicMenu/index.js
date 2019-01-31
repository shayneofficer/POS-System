import React from "react";
import Menu from "../../../components/Menu/index.jsx";
// import { Row, Col } from "react-bootstrap";
import { Container, Row, Col } from "../../../components/Grid";
import API from "../../../utils/API";
import "./index.css";

class ShineMenu extends React.Component {
  state = {
    restaurantId: sessionStorage.getItem("restID"),
    restaurant: {},
    categories: [],
   
  };

  componentDidMount = () => {
    console.log(this.state.restaurantId);
    this.showItems();
  };

  getMenu = () => {
    this.getRestaurant((result) => {
      const Restaurant = result;
      const Menu = Restaurant.Menus[0];
      const Categories = Menu.Categories;
      this.setState({
        restaurant: Restaurant,
        categories: Categories
      });
    });
  };

  getRestaurant = (callback) => {
    API.getRestaurants().then((restaurants) => {
      const restaurant = restaurants.data[0];
      callback(restaurant);
    });
  };

  showItems = () => {
    this.getMenu();
  };


  
  render () {

    const myStyle = {
      titleSpace:  {
        marginTop: "20px",
      }
    
    }


    return (
      <Container>
        <Row>
          <Col size="sm-8">
            <div className="box bg-white">
            <h2 style={myStyle.titleSpace}> Shine Restaurant</h2> 
              <Menu
                categories={this.state.categories}
                orderItem={this.orderItem}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ShineMenu;
