import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./less/style.less"; 
import HeaderLinks from "./js/components/header__links/header__links";

ReactDOM.render(<HeaderLinks />, document.getElementById("header__links"));
