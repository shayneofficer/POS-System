import React from 'react';
import {Container, Row, Col} from '../Grid';
import ControlledTabs from './TabGroup';

class Menu extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <Col size="md-12 sm-10">
            <h3>Menu Items</h3>
            <ControlledTabs categories={this.props.categories}/>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Menu;
