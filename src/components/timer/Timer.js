import React, { Component } from "react";
import PropTypes from "prop-types";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      min: 0,
      sec: 0
    };
  }

  componentDidMount() {
    // do something
    const firstTime = this.props.time;

    const totalTime = {
      hours: 0,
      min: 0,
      sec: 0
    };
    totalTime.hours = Math.floor(firstTime / 3600);
    const minutesLeft = Math.floor(firstTime % 3600);
    totalTime.min = Math.floor(minutesLeft / 60);
    const secondsLeft = Math.floor(minutesLeft % 60);
    totalTime.sec = secondsLeft;
    //do something else
    this.setState(totalTime);
  }

  Timer = endDate => {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateTimer(endDate);
      date ? this.setState(date) : this.stop();
    }, 1000);
  };

  componentWillUnmount() {
    this.stop();
  }

  calculateTimer(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear timer when time is up
    if (diff < 0) return false;

    const timeLeft = this.state;

    // calculate time difference between now and expected time
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop = () => {
    clearInterval(this.interval);
  };

  handleClick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let then = new Date();
    then.setHours(hours + this.state.hours);
    then.setMinutes(minutes + this.state.min);
    then.setSeconds(seconds + this.state.sec);

    this.Timer(then);
  };

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div>
        <span>
          <strong>{this.addLeadingZeros(countDown.hours)}:</strong>
          <strong>{this.addLeadingZeros(countDown.min)}:</strong>
          <strong>{this.addLeadingZeros(countDown.sec)} </strong>
        </span>
        <button className="btn-primary" onClick={this.handleClick}>
          Start
        </button>
        <button className="btn-danger" onClick={this.stop}>
          stop
        </button>
      </div>
    );
  }
}

Timer.propTypes = {
  time: PropTypes.number.isRequired
};

export default Timer;
