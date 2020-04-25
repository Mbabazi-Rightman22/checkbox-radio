import React from "react";

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <div className="rd-box">
        <span className="rd">
          <input
            type="radio"
            checked={this.state.isChecked}
            onClick={this.handleChange}
          />
          Active
        </span>
        <span className="rd">
          <input
            type="radio"
            checked={!this.state.isChecked}
            onClick={this.handleChange}
          />
          Inactive
        </span>
      </div>
    );
  }
}
