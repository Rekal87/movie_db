import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Signup from "./components/Signup";
import Notes from "./components/Notes";
import { Routes, Switch, Route, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
