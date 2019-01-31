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
        <Form.Group bsPrefix="form-group mb-0" controlId="exampleForm.ControlSelect1">
          <Form.Control 
            as="select"
            onChange={this.handleChange}
            value={this.state.active} 
            >
            <option value={-1}>--</option>
            {this.props.tables ? (
              this.props.tables.map((o, i) => {
                return (
                  <option value={i} key={i}>
                    {i+1}
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
