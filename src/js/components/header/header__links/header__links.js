import React from "react";
import "./header__links.less";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function HeaderLinks() {
  return (
    <div className = {"header__links"}>
      <Router>
        <Link to = "/request" className = {"header__link"}>Создать запрос</Link>
      </Router>
      <a className = {"header__link"}>Get contacts</a>
      <a className = {"header__link"}>Info</a>
      <a className = {"header__link"}>About us</a>
      <a className = {"header__link"}>Help</a>
    </div>
  )
}

export default HeaderLinks;

