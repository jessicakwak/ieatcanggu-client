import React from "react";
import Gallery from "./gallery";
import Menu from "./menu";

class Restaurant extends React.Component {
  // hardcoded as of now, but will replace with actual data from DB
  state = {
    restaurant: {
      images: [
        "https://bit.ly/2RXsprv",
        "https://bit.ly/2O622yD",
        "https://bit.ly/38FaBbs",
        "https://bit.ly/2RATsdq"
      ],
      name: "Peloton",
      category: ["Vegetarian", "Breakfast"],
      price: 17,
      likes: 201,
      time: 20,
      menu: [
        { name: "Green Goddess", foodCategory: "Appetizer", price: 10 },
        { name: "Dragonball", foodCategory: "Appetizer", price: 20 },
        { name: "Pure Coconut", foodCategory: "Main Dish", price: 30 },
        { name: "Give me food", foodCategory: "Main Dish", price: 40 },
        { name: "I'm hungrry", foodCategory: "Dessert", price: 50 },
        { name: "Chocolate fudge brownie", foodCategory: "Dessert", price: 60 }
      ]
    }
  };
  componentWillMount() {
    {
      /*axios please get detail restaurant info for specific id*/
    }
  }
  render() {
    return (
      <div id="restaurant">
        <div>
          <h1>{this.state.restaurant.name}</h1>
          <Gallery images={this.state.restaurant.images} />
          <ul className="categories">
            {this.state.restaurant.category.map((e, i) => {
              return <li className={e}>{e}</li>;
            })}
          </ul>
          <div className="info">
            <span className="price">
              <i className="fas fa-dollar-sign"></i>
              {this.state.restaurant.price}
            </span>
            <span className="likes">
              <i className="fas fa-thumbs-up"></i>
              {this.state.restaurant.likes}
            </span>
            <span className="time">
              <i className="fas fa-clock"></i>
              {this.state.restaurant.time} min
            </span>
          </div>
        </div>
        <Menu />
        <div id="basket">
          <h2>Your Basket</h2>
          <ul>
            <li>
              <i className="fas fa-minus"></i>
              <span className="name">Avocado Madness</span>
              <span className="price">$12</span>
            </li>
            <li>
              <i className="fas fa-minus"></i>
              <span className="name">Tutti Frutti</span>
              <span className="price">$10</span>
            </li>
          </ul>
          <div id="total">
            <span>Total</span>
            <span className="price">$22</span>
            <button>Place Order</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;
