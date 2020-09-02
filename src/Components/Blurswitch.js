import React from "react";

class Blurswitch extends React.Component {
  state = {
    active: false,
  };

  render() {
    return (
      <>
        <div
          title="Blur On/Off"
          className={this.state.active ? "round switch-on" : "round switch-off"}
          onClick={() => this.setState({ active: !this.state.active })}
        >
          <span>{this.state.active ? "✕" : "✓"}</span>
        </div>
        <div className={this.state.active ? " light-on " : " contentInner "} />
      </>
    );
  }
}
export default Blurswitch;
