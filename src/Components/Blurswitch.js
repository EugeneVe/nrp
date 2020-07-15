import React from "react"

class Blurswitch extends React.Component {
  state = {
    active: false,
  }

  render() {
    const UnBlured = "✓"
    const Blured = "✕"
    return (
      <>
        <div
          title="Blur On/Off"
          className={this.state.active ? "round switch-on" : "round switch-off"}
          onClick={() => this.setState({ active: !this.state.active })}
        >
          <span>{this.state.active ? Blured : UnBlured}</span>
        </div>
        <div className={this.state.active ? " light-on " : " contentInner "} />
      </>
    )
  }
}
export default Blurswitch
