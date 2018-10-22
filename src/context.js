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
        time: 5400
      },
      {
        id: 2,
        name: "Test Task 2",
        desc: "Ressolve Issue #558",
        time: 1800
      },
      {
        id: 3,
        name: "Test Task 3",
        desc: "Answer Emails",
        time: 20
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
