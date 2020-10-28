import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./less/style.less";
import Header from "./js/components/header/header";
import RequestsList from "./js/components/RequestsList/RequestsList";
import RequestsItem from "./js/components/RequestsItem/RequestsItem";

ReactDOM.render(<RequestsList />, document.getElementById("requestsList"));
ReactDOM.render(<RequestsItem name = "Творог" price = "90" markup = "Нет" />, document.getElementById("requestsItem"));
ReactDOM.render(<Header />, document.getElementById("header"));
