import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div className="resto">
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <Order dishName="Pizza" />
        </li>
        <li>
          <Order dishName="Cola" />
        </li>
        <li>
          <Order dishName="Salad" />
        </li>
        <li>
          <Order dishName="Chocolate Cake" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
