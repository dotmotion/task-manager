import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  state = {
    tasks: [
      {
        id: 1,
        name: "Build Task Manager",
        desc: "React Application",
        time: "01:30",
        status: "Work in Progress"
      },
      {
        id: 2,
        name: "Build Portfolio",
        desc: "Static Website with SASS",
        time: "01:00",
        status: "Completed"
      },
      {
        id: 3,
        name: "Build Budget Manager",
        desc: "Vanilla JS Budget Application",
        time: "00:45",
        status: "Completed"
      }
    ]
  };

  deleteTask = id => {
    const { tasks } = this.state;

    const newTasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks: newTasks
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <React.Fragment>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            deleteHandler={this.deleteTask.bind(this, task.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Tasks;
