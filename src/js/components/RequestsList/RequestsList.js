import React from "react";
import "./RequestsList.less";
import RequestsItem from "../RequestsItem/RequestsItem";

class RequestsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name:"Творог", price: "90", markup: "Да"},
        {name:"Творог", price: "90", markup: "Да"},
        {name:"Творог", price: "90", markup: "Да"},
        {name:"Творог", price: "90", markup: "Да"},
        {name:"Творог", price: "90", markup: "Да"},
        {name:"Творог", price: "90", markup: "Да"},
        {name:"Творог", price: "90", markup: "Да"}
      ]
    }
  }
  render() {
    const items = this.state.items.map((curr, index) => {
                    return <RequestsItem name = {curr.name} markup = {curr.markup} price = {curr.price} key = {index}/>
                  });
    return (
      <>
        <div className = {"list"}>
          <span className = {"list__name"}>Название товаров</span>
          <span className = {"list__price"}>Примерная стоимость</span>
          <span className = {"list__markup"}>Доплата</span>
        </div>
        {items}
      </>
    )
  }
}

export default RequestsList;