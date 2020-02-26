import React from "react";

class Basket extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Basket;
