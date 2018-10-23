import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/tasks/AddTask";
import EditTask from "./components/tasks/EditTask";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
// import NotFound from "./components/pages/NotFound";
import { Provider } from "./context";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename="/task-manager/">
          <div className="App">
            <Header branding="Task Manager" />
            <div className="container d-flex flex-column justify-content-center align-items-center">
              <Switch>
                <Route exact path="/" component={Tasks} />
                <Route exact path="/add" component={AddTask} />
                <Route exact path="/edit/:id" component={EditTask} />
                <Route exact path="/about" component={About} />
                <Route component={Tasks} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
