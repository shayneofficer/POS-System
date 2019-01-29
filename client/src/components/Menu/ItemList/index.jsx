import React from "react";
import List from "./List";
import { Container, Row, Col } from "../../Grid";
import "./List.css";

class ItemList extends React.Component {
  render () {
    return (
      <Container>
        <Col size="sm-12">
          {this.props.items.length ? (
            <List key={this.props.key} children={this.props.items}>
              {this.props.items.map((item, i) => {
                return (
                  <Row>
                    <Col size="sm-9"><h6 onClick={this.props.orderItem} className="text-left">{item.name}</h6></Col>
                    <Col size="sm-3">{item.price}</Col>
                  </Row>
                );
              })}
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
