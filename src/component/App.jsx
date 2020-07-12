import React from "react";
import "../App.css";
import BreakInterval from "./BreakInterval";
import SessionLength from "./SessionLength";
import Timer from "./Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 39,
      sessionLength: 25,
      sessionMinute: 25,
    };
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1,
      };
    });
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1,
      };
    });
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        sessionMinute: prevState.sessionLength - 1,
      };
    });
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        sessionMinute: prevState.sessionLength + 1,
      };
    });
  }
  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        sessionMinute: prevState.sessionMinute - 1,
      };
    });
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        sessionMinute: this.state.SessionLength,
      });
    } else {
      this.setState({
        sessionMinute: this.state.breakLength,
      });
    }
  }

  onRefresh() {
    this.setState({
      sessionMinute: this.state.sessionLength,
    });
  }

  render() {
    return (
      <section>
        <h1>Pomodoro Clock</h1>
        <section className="length-container">
          <BreakInterval
            breakLength={this.state.breakLength}
            decreaseCount={this.onDecreaseBreakLength}
            increaseCount={this.onIncreaseBreakLength}
          />
          <SessionLength
            sessionLength={this.state.sessionLength}
            decreaseSessionCount={this.onDecreaseSessionLength}
            increaseSessionCount={this.onIncreaseSessionLength}
          />
        </section>
        <section>
          <Timer
            timerMinute={this.state.sessionMinute}
            breakLength={this.state.breakLength}
            updateTimerMinute={this.onUpdateTimerMinute}
            toggleInterval={this.onToggleInterval}
            refreshClick={this.onRefresh}
          />
        </section>
      </section>
    );
  }
}

export default App;
