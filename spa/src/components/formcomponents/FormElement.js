import React, { Component } from "react";
import "./FormComponents.css";

class FormElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: props.elementState.Id,
      Name: props.elementState.Name,
      Type: props.elementState.Type,
      Label: props.elementState.Label,
      Mandatory: props.elementState.Mandatory,
      Min: props.elementState.Min,
      Max: props.elementState.Max,
      Options: props.elementState.Options,
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleChange = (updatedData) => {
    let updatedState = { ...this.state, ...updatedData };
    this.setState(updatedState);
    this.props.onUpdate(updatedState);
  };

  render() {
    return (
      <div className="form-component">
        <input
          type="text"
          value={this.state.Label}
          onChange={(event) => this.handleChange({ Label: event.target.value })}
        />
        {this.renderInput()}
        <div className="footer">
          <div className="left-footer"> </div>
          <div className="right-footer">
            <label className="switch">
              <input
                type="checkbox"
                onChange={(event) => this.handleChange({Mandatory: event.target.checked})}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default FormElement;
