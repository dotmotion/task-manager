import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import Timer from "../timer/Timer";

class Task extends Component {
  deleteItem = (id, dispatch) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  render() {
    const { id, name, desc, time } = this.props.task;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body w-50 mb-3 bg-secondary shadow p-3 mb-5 mr-5 bg-white rounded">
              <h4>
                {name}

                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.deleteItem.bind(this, id, dispatch)}
                />
                <Link to={`/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      float: "right",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Timer time={time} />
                </li>
                <li className="list-group-item">{desc}</li>
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
