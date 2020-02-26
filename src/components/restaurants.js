import React from "react";
import NavBar from "./nav";
import Thumbnail from "./thumbnail";

class Restaurants extends React.Component {
  state = {
    restaurants: [
      {
        images: [
          "https://bit.ly/2vx8SGX",
          "https://bit.ly/2RXsprv",
          "https://bit.ly/2O622yD",
          "https://bit.ly/38FaBbs",
          "https://bit.ly/2RATsdq"
        ],
        name: "Bella Italia",
        category: ["Italian"],
        price: 20,
        likes: 347,
        deliverytime: 15
      },
      {
        images: [
          "https://bit.ly/2u17mMF",
          "https://bit.ly/2RXsprv",
          "https://bit.ly/2O622yD",
          "https://bit.ly/38FaBbs",
          "https://bit.ly/2RATsdq"
        ],
        name: "Peloton",
        category: ["Vegetarian", "Breakfast"],
        price: 17,
        likes: 201,
        deliverytime: 20
      },
      {
        images: [
          "https://bit.ly/2RyB1Ww",
          "https://bit.ly/2RXsprv",
          "https://bit.ly/2O622yD",
          "https://bit.ly/38FaBbs",
          "https://bit.ly/2RATsdq"
        ],
        name: "Nüde",
        category: ["Burger", "Vegetarian"],
        price: 22,
        likes: 959,
        deliverytime: 12
      },
      {
        images: [
          "https://bit.ly/2uDvBke",
          "https://bit.ly/2RXsprv",
          "https://bit.ly/2O622yD",
          "https://bit.ly/38FaBbs",
          "https://bit.ly/2RATsdq"
        ],
        name: "Burgerz",
        category: ["Burger"],
        price: 19,
        likes: 53,
        deliverytime: 35
      }
    ]
  };

  componentWillMount() {
    {
      /*
      /*axios please get all the restaurants
    */
    }
  }

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
