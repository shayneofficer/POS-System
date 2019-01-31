import React from "react";
import { Container, Row, Col } from "../Grid";
import Button from "react-bootstrap/Button";
import ItemList from "./ItemList";
import CreateModal from "./CreateModal";

class Menu extends React.Component {
  state = {
    activeItems: [],
    activeCat: -1
  };
  handleClick = (i) => {
    console.log(i);
    if (i === this.state.activeCat) {
      this.setState({
        activeCat: -1,
        activeItems: []
      });
    } else {
      this.setState({
        activeCat: i,
        activeItems: this.props.categories[i].Items
      });
    }
  };
  createCategory = (catName) => {
    console.log("TODO: Create Category", catName);
    // this.props.createCategory();
  };

  render () {
    return (
      <Container>
        <Row>
          <Col size="md-12 sm-10">
          {/* Category Buttons */}
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
                  type="button"
                  key={i}>
                  {cat.name}
                </Button>
              );
            })}
            {/* Button + Modal to create a new category */}
            {this.props.canEdit && (
              <CreateModal
                createType="Category"
                handleCreate={this.createCategory}
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <ItemList
              className="itemList"
              orderItem={this.props.orderItem}
              items={this.state.activeItems}
              canEdit={this.props.canEdit}
              activeCat={this.state.activeCat}
              canOrder={this.props.canOrder}
              createItem={this.props.createItem}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Menu;
