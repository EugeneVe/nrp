import React from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

class Blurswitch extends React.Component {
  state = {
    active: false,
  }

  render() {
    const UnBlured = "✓"
    const Blured = "✕"
    return (
      <>
        <div className={this.state.active ? "round switch-on" : "round switch-off"} onClick={() => this.setState({ active: !this.state.active })}>
          {["top"].map((placement) => (
            <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-${placement}`}>Blur On/Off</Tooltip>}>
              <span>{this.state.active ? Blured : UnBlured}</span>
            </OverlayTrigger>
          ))}
        </div>
        <div className={this.state.active ? " light-on " : " contentInner "} />
      </>
    )
  }
}
export default Blurswitch
