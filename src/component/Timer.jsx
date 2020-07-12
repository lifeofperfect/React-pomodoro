import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timeSec: 0,
      intervalId: 0,
    };
    this.play = this.play.bind(this);

    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  decreaseTimer() {
    switch (this.state.timeSec) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });
            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });
            this.props.toggleInterval(this.state.isSession);
          }
        }
        this.props.updateTimerMinute();
        this.setState({
          timeSec: 59,
        });
        break;
      default:
        this.setState((prevState) => {
          return {
            timeSec: prevState.timeSec - 1,
          };
        });
        break;
    }
  }

  play() {
    let intervalId = setInterval(this.decreaseTimer, 1000);

    this.setState({
      intervalId: intervalId,
    });
  }

  stop() {
    clearInterval(this.state.intervalId);
  }

  refresh() {
    this.stop();
    this.props.refreshClick();
    this.setState({
      timeSec: 0,
    });
  }

  render() {
    return (
      <section>
        <section className="session-box">
          <h2>{this.state.isSession === true ? "Session" : "Break"}</h2>
          <section className="timing">
            <span>{this.props.timerMinute}</span>
            <span>:</span>
            <span>
              {this.state.timeSec === 0
                ? "00"
                : this.state.timeSec < 10
                ? "0" + this.state.timeSec
                : this.state.timeSec}
            </span>
          </section>
        </section>

        <section>
          <button onClick={this.play}>Play</button>
          <button className="controls" onClick={this.stop}>
            Stop
          </button>
          <button onClick={this.refresh}>Refresh</button>
        </section>
      </section>
    );
  }
}

export default Timer;
