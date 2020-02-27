import React from "react";
import axios from "axios";
import Gallery from "./gallery";
import Menu from "./menu";
import Basket from "./basket";

class Restaurant extends React.Component {
  // hardcoded as of now, but will replace with actual data from DB
  state = {
    restaurant: {
      images: [],
      name: "",
      category: [],
      likes: 0,
      deliverytime: 0,
      menu: [
        {
          name: "",
          category: "",
          price: 0
        }
      ]
    },
    currentBasket: [],
    totalPrice: 0
  };
  componentWillMount() {
    {
      console.log(this.state.restaurant.images);
      axios
        .get(
          `https://team03-deliveroo-api.herokuapp.com/restaurants/${this.props.match.params.id}`
        )
        .then(res => {
          this.setState({ restaurant: res.data });
        })
        .catch(err => console.log(err));
    }
  }

  calculateAvg = menu => {
    return menu.map(e => e.price).reduce((t, i) => t + i) / menu.length;
  };

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
              {this.calculateAvg(this.state.restaurant.menu).toFixed(0)}
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
