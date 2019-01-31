import React from "react";
import { Container, Row, Col } from "../Grid";
import Button from "react-bootstrap/Button";
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

  render () {
    return (
      <Container>
        <Row>
          <Col size="md-12 sm-10">
            {this.props.categories.map((cat, i) => {
              var btnState = "";
              this.state.activeCat === i
                ? (btnState = "active")
                : (btnState = "");

              return (
                <Button
                  onClick={() => this.handleClick(i)}
                  className={"catBtn " + btnState}
                  variant="warning"
                  key={i}>
                  {cat.name}
                </Button>
              );
            })}
            <Button
              onClick={() => this.addCategory}
              id="addCatBtn"
              variant="outline-warning">
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <ItemList
              className="itemList"
              orderItem={this.props.orderItem}
              items={this.state.activeItems}
              canEdit={this.props.canEdit}
              activeCat={this.props.activeCat}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Menu;
