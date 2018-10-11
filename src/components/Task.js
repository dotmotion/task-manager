import React, { Component } from "react";
import PropTypes from "prop-types";

class Task extends Component {
  render() {
    const { name, desc, time } = this.props.task;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">{desc}</li>
          <li className="list-group-item">{time}</li>
        </ul>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
};

export default Task;
