import React from "react";
import Form from "react-bootstrap/Form";

class FormSelect extends React.Component {
  state = {
    active: "--"
  }
  componentDidMount = () => {
    if (this.props.active) {
      this.setState({
        active: this.props.active
      })
    }
  }
  handleChange = (event) => {
    this.setState({
      active: event.target.value
    })
    this.props.handleSelect(event);
  }
  render () {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control
            as="select"
            onChange={this.handleChange}
            value={this.state.active}
            >
            {this.props.options ? (
              this.props.options.map((o, i) => {
                return (
                  <option value={o} key={i}>
                    {o}
                  </option>
                );
              })
            ) : (
              <option>--</option>
            )}
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default FormSelect;
