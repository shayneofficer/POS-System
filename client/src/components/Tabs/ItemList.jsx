import React from "react";
import { List, ListItem } from "../List";
import { Row, Col } from "../Grid";

class ItemList extends React.Component {
  render () {
    return (
      <div>
        <List>
          {this.props.items.map((item) => {
            return (
              <ListItem key={item._id}>
                <Row>
                  <Col size="sm-5 md-3">
                    <p>
                      {item.name} - {item.price}
                    </p>
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
