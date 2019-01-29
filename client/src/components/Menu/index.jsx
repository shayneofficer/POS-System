import React from "react";
import { Container, Row, Col } from "../Grid";
import { Button } from "react-bootstrap";
import ItemList from "./ItemList";


class Menu extends React.Component {
  state = {
    activeItems: [],
    activeCat: -1
  };
  handleClick = (i) => {
    console.log(i);
    this.setState({
      activeCat: i,
      activeItems: this.props.categories[i].Items
    });
  };


  orderItem = () => {
    alert("item added to order")
 
  };

  render () {
    return (
      <Container>
        <Row>
          <Col size="md-12 sm-10">
            <h3>Menu Items</h3>
            {this.props.categories.map((cat, i) => {
              {
                var btnState = "";
              }
              {
                this.state.activeCat === i
                  ? (btnState = "active")
                  : (btnState = "");
              }
              return (
                <Button
                  onClick={() => this.handleClick(i)}
                  className={"catBtn " + btnState}
                  bsStyle="warning"
                  key={i}>
                  {cat.name}
                </Button>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <ItemList  orderItem={this.orderItem} className="itemList" items={this.state.activeItems} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Menu;
