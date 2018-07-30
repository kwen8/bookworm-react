import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" component={LoginPage} />
  </div>
);

export default App;
