import React, { Component } from "react";
import PropTypes from "prop-types";

class Task extends Component {
  render() {
    const { name, desc, time, status } = this.props.task;
    return (
      <div className="card card-body mb-3 bg-secondary shadow p-3 mb-5 mr-5 bg-white rounded">
        <h4>{name}</h4> <h6>{time}</h6>
        <ul className="list-group">
          <li className="list-group-item">{desc}</li>
          <li className="list-group-item">Status: {status}</li>
        </ul>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
};

export default Task;
