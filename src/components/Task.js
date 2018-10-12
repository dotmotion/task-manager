import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Task extends Component {
  deleteItem = (id, dispatch) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  render() {
    const { id, name, desc, time, status } = this.props.task;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 bg-secondary shadow p-3 mb-5 mr-5 bg-white rounded">
              <h4>
                {name}

                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.deleteItem.bind(this, id, dispatch)}
                />
              </h4>

              <h6>{time}</h6>

              <ul className="list-group">
                <li className="list-group-item">{desc}</li>
                <li className="list-group-item">Status: {status}</li>
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
};

export default Task;
