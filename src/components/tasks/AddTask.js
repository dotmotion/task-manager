import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInput from "../layout/TextInput";
import uuid from "uuid";

class AddTask extends Component {
  state = {
    name: "",
    desc: "",
    time: 0,
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
      this.setState({ errors: { desc: "Description is required" } });
      return;
    }

    if (time === 0 || "") {
      this.setState({ errors: { time: "Time is required" } });
      return;
    }

    const newTask = {
      id: uuid(),
      name,
      desc,
      time
    };

    dispatch({ type: "ADD_TASK", payload: newTask });

    this.props.history.push("task-manager/");
  };

  onClick = (selectedTime, e) => {
    e.preventDefault();
    e.target.classList.toggle("btn-outline-danger");
    this.setState({ time: selectedTime });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    let { name, desc, time, errors } = this.state;

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
                    placeholder="Task Description"
                    value={desc}
                    onChange={this.onChange}
                    error={errors.desc}
                  />
                  <div className="form-group d-flex flex-column align-items-center">
                    <label htmlFor="time" className="align-self-start">
                      Time
                    </label>

                    <div
                      className="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-secondary">
                        <input
                          type="radio"
                          name="time"
                          id="1800"
                          checked={this.state.time === 1800}
                          onChange={this.onClick.bind(this, 1800)}
                        />{" "}
                        30min
                      </label>
                      <label className="btn btn-secondary">
                        <input
                          type="radio"
                          name="time"
                          id="3600"
                          checked={this.state.time === 3600}
                          onChange={this.onClick.bind(this, 3600)}
                        />{" "}
                        1hr
                      </label>
                      <label className="btn btn-secondary">
                        <input
                          type="radio"
                          name="time"
                          id="5400"
                          checked={this.state.time === 5400}
                          onChange={this.onClick.bind(this, 5400)}
                        />{" "}
                        1hr 30min
                      </label>
                    </div>

                    <input
                      // type={type}
                      name="time"
                      className="form-control form-control-lg mt-3"
                      placeholder="Task Time"
                      value={Math.floor(time / 60)}
                      onChange={this.onChange}
                      error={errors.time}
                    />
                  </div>
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
