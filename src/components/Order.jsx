import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = props => {
  const [orders, setOrders] = useState(0);
  function orderOne() {
    setOrders(orders + 1);
  }
  function eraseOne() {
    if (orders > 0) {
      setOrders(orders - 1);
    }
  }
  return (
    <div>
      <RestaurantButton clickHandler={eraseOne} description="delete" />
      {props.dishName}: {orders}
      <RestaurantButton clickHandler={orderOne} description="add" />
    </div>
  );
};

export default Order;
