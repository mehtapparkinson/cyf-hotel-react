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
    <div className="dish">
      {props.dishName}: {orders}
      <RestaurantButton clickHandler={orderOne} description="➕" />
      <RestaurantButton clickHandler={eraseOne} description="➖" />
    </div>
  );
};

export default Order;
