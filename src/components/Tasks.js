import React, { Component } from "react";
import Task from "./Task";
import { Consumer } from "../context";

class Tasks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { tasks } = value;
          return (
            <React.Fragment>
              {tasks.map(task => (
                <Task key={task.id} task={task} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Tasks;
