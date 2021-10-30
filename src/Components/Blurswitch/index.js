import React, { useState } from "react";

const Blurswitch = () => {
  const [active, setActive] = useState(false);
  const istActive = () => setActive(!active);

  return (
    <>
      <div className="blurswitch__button">
        <div
          title="Blur On/Off"
          className={active ? "round switch-on" : "round switch-off"}
          onClick={() => istActive()}
        >
          <span>{active ? "✕" : "✓"}</span>
        </div>
      </div>
      <div className={active ? "isBlur unBlur" : "isBlur"}></div>
    </>
  );
};

export default Blurswitch;
