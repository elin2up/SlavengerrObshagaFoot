import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./less/style.less";
import Header from "./js/components/header/header";
import WelcomeText from "./js/components/WelcomeText/WelcomeText";

ReactDOM.render(<WelcomeText />, document.getElementById("welcomeText"));
ReactDOM.render(<Header />, document.getElementById("header"));
