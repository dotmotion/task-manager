import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  state = {
    tasks: [
      {
        id: 1,
        name: "Build Task Manager",
        desc: "React Application",
        time: 5000
      },
      {
        id: 2,
        name: "Build Portfolio",
        desc: "Static Website with SASS",
        time: 300
      },
      {
        id: 3,
        name: "Build Budget Manager",
        desc: "Vanilla JS Budget Application",
        time: 2000
      }
    ]
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    );
  }
}

export default Tasks;
