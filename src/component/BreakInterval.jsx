import React from "react";

function BreakInterval(props) {
  function decreaseLengthBtn() {
    if (props.breakLength === 1) {
      return;
    }
    props.decreaseCount();
  }

  function increaseLengthBtn() {
    if (props.breakLength === 60) {
      return;
    }
    props.increaseCount();
  }

  return (
    <section className="break-container">
      <h3>Break Length</h3>
      <section className="btn">
        <button onClick={decreaseLengthBtn}>Down</button>
        <p>{props.breakLength}</p>
        <button onClick={increaseLengthBtn}>Up</button>
      </section>
    </section>
  );
}
export default BreakInterval;
