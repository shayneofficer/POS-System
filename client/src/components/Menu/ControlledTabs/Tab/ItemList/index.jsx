import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import { Row, Col } from "../Grid";

class ItemList extends React.Component {
  render () {
    return (
      <div>
        <List>
          {this.props.items.map((item, i) => {
            return (
              <ListItem key={i}>
                <Row>
                  <Col size="sm-8">
                    <h3>{item.name}</h3>
                  </Col>
                  <Col size="sm-3">
                    <h3>{item.price}</h3>
                  </Col>
                </Row>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}
export default ItemList;
