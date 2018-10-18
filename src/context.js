import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
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
        name: "Test Task 1",
        desc: "Refactor Component Code",
        time: {
          hours: 1,
          min: 30,
          sec: 0
        },
        status: "Work in Progress"
      },
      {
        id: 2,
        name: "Test Task 2",
        desc: "Ressolve Issue #558",
        time: {
          hours: 1,
          min: 0,
          sec: 0
        },
        status: "Completed"
      },
      {
        id: 3,
        name: "Test Task 3",
        desc: "Answer Emails",
        time: {
          hours: 0,
          min: 30,
          sec: 0
        },
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
