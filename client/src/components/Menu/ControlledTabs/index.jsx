import React from "react";
import ItemList from "./List";
import { Tabs, Tab } from "react-bootstrap";

class ControlledTabs extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      key: 1
    };
  }
  handleSelect (key) {
    this.setState({ key });
  }

  render () {
    return (
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
        animation={false}>
        {this.props.categories.map((cat) => {
          return (
            <Tab eventKey={i} title={cat.title}>
              <ItemList
                items={cat.items}
              />
            </Tab>
          );
        })}
      </Tabs>
    );
  }
}

export default ControlledTabs;
