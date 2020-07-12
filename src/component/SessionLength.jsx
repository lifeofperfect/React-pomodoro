import React from "react";

function SessionLength(props) {
  function decreaseSession() {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSessionCount();
  }

  function increaseSession() {
    if (props.sessionLength === 60) {
      return;
    }
    props.increaseSessionCount();
  }
  return (
    <section>
      <h3>Session Length</h3>
      <section className="btn">
        <button onClick={decreaseSession}>Down</button>
        <p>{props.sessionLength}</p>
        <button onClick={increaseSession}>Up</button>
      </section>
    </section>
  );
}

export default SessionLength;
