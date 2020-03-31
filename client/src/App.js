import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Form from "./Components/Form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div align="center">
        <Link to="/">Form</Link>||
          <Link to="/admin-dashboard">Admin</Link>

        </div>
        <Switch>
          <Route exact path="/admin-dashboard" component={Dashboard} />
          <Route exact path="/" component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
