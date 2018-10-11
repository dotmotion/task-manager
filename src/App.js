import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from "./components/Tasks";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Task Manager" />
        <div className="container">
          <Tasks />
        </div>
      </div>
    );
  }
}

export default App;
