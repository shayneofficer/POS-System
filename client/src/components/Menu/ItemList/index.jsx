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
                  <Row key={i}>
                    <Col size="sm-9"><h6 key={i} className="text-left" onClick={() => this.props.orderItem(item)}>{item.name}</h6></Col>
                    <Col size="sm-3" onClick={() => this.props.orderItem(item)}>{item.price}</Col>
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
