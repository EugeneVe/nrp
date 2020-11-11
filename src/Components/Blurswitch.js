import React from "react";

class Blurswitch extends React.Component {
  state = {
    active: false,
  };

  render() {
    return (
      <div className="blurswitch__content">
        <div className="blurswitch__button">
          <div title="Blur On/Off" className={this.state.active ? "round switch-on" : "round switch-off"} onClick={() => this.setState({ active: !this.state.active })}>
            <span>{this.state.active ? "✕" : "✓"}</span>
          </div>
        </div>
        <div className={this.state.active ? "isBlur unBlur" : "isBlur"}></div>
      </div>
    );
  }
}
export default Blurswitch;
