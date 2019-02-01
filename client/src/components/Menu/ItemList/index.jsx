import React from "react";
import List from "./List";
import { Container, Row, Col } from "../../Grid";
import "./List.css";
import CreateModal from "../CreateModal";
class ItemList extends React.Component {
  state = {
    activeCat: this.props.activeCat
  };
  componentDidUpdate (prevProps) {
    if (prevProps.activeCat !== this.props.activeCat) {
      this.setState({
        activeCat: this.props.activeCat
      });
    }
  }
  createItem= (catIndex, itemName, itemPrice) => {
    this.props.createItem(catIndex, itemName, itemPrice);
  };

  orderItem = (item) => {
    if (this.props.canOrder) {
      this.props.orderItem(item);
    }
  };
  render () {
    return (
      <Container>
        <Col size="sm-12">
          {this.props.items ? (
            <List key={this.props.key} children={this.props.items}>
              {this.props.items.map((item, i) => {
                return (
                  <Row key={i}>
                    <Col size="sm-9">
                      <h6
                        key={i}
                        className="text-left"
                        onClick={() => this.orderItem(item)}>
                        {item.name}
                      </h6>
                    </Col>
                    <Col size="sm-3" onClick={() => this.orderItem(item)}>
                      {item.price}
                    </Col>
                  </Row>
                );
              })}
              {this.props.canEdit && (
                <CreateModal
                  createType="Item"
                  handleCreate={this.createItem}
                  activeCat={this.state.activeCat}
                />
              )}
            </List>
          ) : (
            <p>Select a Category to View Items</p>
          )}
        </Col>
      </Container>
    );
  }
}
export default ItemList;
