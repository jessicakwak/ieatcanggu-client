import React from "react";
import NavBar from "./nav";
import Thumbnail from "./thumbnail";

class Restaurants extends React.Component {
  state = {
    restaurants: [
      {
        imgUrl: "https://bit.ly/2vx8SGX",
        name: "Bella Italia",
        category: ["Italian"],
        price: 20,
        likes: 347,
        time: 15
      },
      {
        imgUrl: "https://bit.ly/2u17mMF",
        name: "Peloton",
        category: ["Vegetarian", "Breakfast"],
        price: 17,
        likes: 201,
        time: 20
      },
      {
        imgUrl: "https://bit.ly/2RyB1Ww",
        name: "Nüde",
        category: ["Burger", "Vegetarian"],
        price: 22,
        likes: 959,
        time: 12
      },
      {
        imgUrl: "https://bit.ly/2uDvBke",
        name: "Burgerz",
        category: ["Burger"],
        price: 19,
        likes: 53,
        time: 35
      }
    ]
  };

  render() {
    return (
      <>
        <NavBar />
        <div id="page">
          {this.state.restaurants.map((r, i) => {
            return <Thumbnail restaurant={r} />;
          })}
        </div>
      </>
    );
  }
}

export default Restaurants;
