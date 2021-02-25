import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Pagination from "./components/Pagination";
import showList from "./components/showList";
import Dashbord from "./components/admin/Dashbord";

function App(props) {
  return (
    <div>
      <Router>
        <Route
          exact
          strict
          component={Signup}
          path="/Signup"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Login}
          path="/Login"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Dashbord}
          path="/Dashbord"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Pagination}
          path="/Pagination"
          history={props.history}
        />

        <Route
          exact
          strict
          component={showList}
          path="/showList"
          history={props.history}
        />
      </Router>
    </div>
  );
}

export default App;
