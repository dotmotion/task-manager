import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
