import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="display-4">About Task Manager</h1>
      <p className="lead">Simple Task Manager Application</p>
      <p className="lead">
        So far you can Add and Delete Tasks, as well as start and stop each
        Task's timer
      </p>
      <p className="lead">
        When adding a task, you can only select 3 durations
      </p>
      <p className="text-secondary">v1.0</p>
    </div>
  );
}
