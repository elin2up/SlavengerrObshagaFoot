import React from "react";
import "./header__links.less";

function HeaderLinks() {
  return (
    <div className = {"header__links"}>
      <a src = {"https://vk.com"} className = {"header__link"}>Find</a>
      <a className = {"header__link"}>Get contacts</a>
      <a className = {"header__link"}>Info</a>
      <a className = {"header__link"}>About us</a>
      <a className = {"header__link"}>Help</a>
    </div>
  )
}

export default HeaderLinks;