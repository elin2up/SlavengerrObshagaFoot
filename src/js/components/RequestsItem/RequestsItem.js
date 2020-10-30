import React, {Component} from "react";
import "./RequestsItem.less";

function RequestsItem(props) {
  return (
    <div onClick = {props.clickHandler} className = {"item"}>
      <span className = {"item__name"}>{props.name}</span>
      <span className = {"item__price"}>{props.price} рублей</span>
      <span className = {"item__markup"}>{props.markup}</span>
    </div>
  )
}

export default RequestsItem;