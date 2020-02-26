import React from "react";

class Basket extends React.Component {
  state = {
    currentBasket: this.props.currentBasket,
    totalPrice: this.props.totalPrice
  };

  componentWillReceiveProps(nextProp) {
    this.setState({
      currentBasket: nextProp.currentBasket,
      totalPrice: nextProp.totalPrice
    });
  }
  render() {
    return (
      <div id="basket">
        <h2>Your Basket</h2>
        <ul>
          {this.state.currentBasket.map((e, i) => {
            return (
              <li key={i}>
                <span onClick={x => this.props.remove(e)}>
                  <i className="fas fa-minus"></i>
                </span>
                <span className="name">{e.name}</span>
                <span className="price">${e.price}</span>
              </li>
            );
          })}
        </ul>

        <div id="total">
          <span>Total</span>
          <span className="price">${this.state.totalPrice}</span>
          <button>Place Order</button>
        </div>
      </div>
    );
  }
}

export default Basket;
