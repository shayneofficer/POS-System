import React from 'react';
import ItemList from './ItemList';
import {Tabs, Tab } from 'react-bootstrap';

class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    this.setState({ key });
  }

  render () {
    return (
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id='category-tabs'
        animation={false}>
        <Tab eventKey={1} title='Cat 1'>
          <ItemList
            books={this.props.searched}
            handleSave={this.props.handleSave}
            handleDelete={this.props.handleDelete}
          />
        </Tab>
        <Tab eventKey={2} title='Cat 2'>
          <ItemList
            books={this.props.saved}
            handleSave={this.props.handleSave}
            handleDelete={this.props.handleDelete}
          />
        </Tab>
      </Tabs>
    );
  }
}

export default ControlledTabs;