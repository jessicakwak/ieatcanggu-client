import React from "react";
import axios from "axios";
import Gallery from "./gallery";
import Menu from "./menu";
import Basket from "./basket";

class Restaurant extends React.Component {
  // hardcoded as of now, but will replace with actual data from DB
  state = {
    restaurant: {
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
      deliverytime: 20,
      menu: [
        {
          name: "Gimme some spring rolls",
          category: "Appetizer",
          price: 10
        },
        { name: "Dragonball", category: "Appetizer", price: 20 },
        { name: "Pure Coconut", category: "Main Dish", price: 30 },
        { name: "Give me food", category: "Main Dish", price: 40 },
        { name: "I'm hungrry", category: "Dessert", price: 50 },
        { name: "Chocolate fudge brownie", category: "Dessert", price: 60 },
        { name: "Bintang", category: "Drinks", price: 1 }
      ]
    },
    currentBasket: [],
    totalPrice: 0
  };
  componentWillMount() {
    {
      axios
        .get(
          `https://team03-deliveroo-api.herokuapp.com/restaurants/${this.props.match.params.id}`
        )
        .then(res => {
          this.setState({ restaurant: res.data });
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  }

  addBasket = food => {
    let basket = this.state.currentBasket;
    basket.push({ key: basket.length + 1, name: food.name, price: food.price });
    let total = 0;
    basket.forEach(e => (total += e.price));
    this.setState({ currentBasket: basket, totalPrice: total });
  };

  remove = food => {
    let basket = this.state.currentBasket;
    basket = basket.filter(e => e.key != food.key);
    let total = 0;
    basket.forEach(e => (total += e.price));
    this.setState({ currentBasket: basket, totalPrice: total });
  };

  render() {
    return (
      <div id="restaurant">
        <div>
          <h1>{this.state.restaurant.name}</h1>
          <Gallery images={this.state.restaurant.images} />
          <ul className="categories">
            {this.state.restaurant.category.map((e, i) => {
              return <li className={e.name}>{e.name}</li>;
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
              {this.state.restaurant.deliverytime} min
            </span>
          </div>
        </div>
        <Menu menu={this.state.restaurant.menu} addBasket={this.addBasket} />
        <Basket
          currentBasket={this.state.currentBasket}
          totalPrice={this.state.totalPrice}
          remove={this.remove}
        />
      </div>
    );
  }
}

export default Restaurant;
