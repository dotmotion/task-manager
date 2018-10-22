import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInput from "../layout/TextInput";

class AddTask extends Component {
  state = {
    name: "",
    desc: "",
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, desc, time } = this.state;

    // Check For Errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (desc === "") {
      this.setState({ errors: { desc: "desc is required" } });
      return;
    }

    const newTask = {
      name,
      desc,
      time
    };

    dispatch({ type: "ADD_TASK", payload: newTask });

    // Clear State
    this.setState({
      name: "",
      desc: "",
      time: "",
      errors: {}
    });

    this.props.history.push("task-manager/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, desc, time, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Task</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInput
                    label="Name"
                    name="name"
                    placeholder="Task Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInput
                    label="Descripion"
                    name="desc"
                    type="desc"
                    placeholder="Task Description"
                    value={desc}
                    onChange={this.onChange}
                    error={errors.desc}
                  />
                  <TextInput
                    label="Time"
                    name="time"
                    type="text"
                    placeholder="Task Time"
                    value={time}
                    onChange={this.onChange}
                    error={errors.time}
                  />
                  <input
                    type="submit"
                    value="Add Task"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddTask;
