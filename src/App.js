import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Task Manager" />
          <div className="container">
            <Tasks />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
