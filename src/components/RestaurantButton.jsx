import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button onClick={props.clickHandler} className="btn btn-primary">
        {props.description}
      </button>
    </div>
  );
};

export default RestaurantButton;
