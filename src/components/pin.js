import React from "react";

const Pin = (props)=> {
  const {restaurant, lat, lng} = props

    return (
      <div
        className={restaurant.selected ? "pin selected" : "pin"}
        lat={lat}
        lng={lng}
      >
        <label>{restaurant.name}</label>
      </div>
    );

}

export default Pin;
