import React from "react";

class Basket extends React.Component {
  state = {
    currentBasket: this.props.currentBasket
  };

  componentWillReceiveProps(nextProp) {
    this.setState({ currentBasket: nextProp.currentBasket });
  }
  render() {
    return (
      <div id="basket">
        <h2>Your Basket</h2>
        <ul>
          {this.state.currentBasket.map((e, i) => {
            return (
              <li>
                <i className="fas fa-minus"></i>
                <span className="name">{e.name}</span>
                <span className="price">${e.price}</span>
              </li>
            );
          })}
        </ul>

        <div id="total">
          <span>Total</span>
          <span className="price">$22</span>
          <button>Place Order</button>
        </div>
      </div>
    );
  }
}

export default Basket;
