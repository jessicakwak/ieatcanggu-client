import React from "react";

class Restaurant extends React.Component {
  render() {
    return (
      <div id="restaurant">
        <div>
          <h1>Peloton</h1>
          <div id="gallery">
            <div
              className="photo"
              style={{ backgroundImage: "url('https://bit.ly/2RXsprv')" }}
            ></div>
            <div
              className="photo"
              style={{ backgroundImage: "url('https://bit.ly/2O622yD')" }}
            ></div>
            <div
              className="photo"
              style={{ backgroundImage: "url('https://bit.ly/38FaBbs')" }}
            ></div>
            <div
              className="photo"
              style={{ backgroundImage: "url('https://bit.ly/2RATsdq')" }}
            ></div>
          </div>
          <ul className="categories">
            <li style={{ background: "#40C9A2" }}>Vegetarian</li>
            <li style={{ background: "#F2B430" }}>Breakfast</li>
          </ul>
          <div className="info">
            <span className="price">
              <i className="fas fa-dollar-sign"></i>20
            </span>
            <span className="likes">
              <i className="fas fa-thumbs-up"></i>347
            </span>
            <span className="time">
              <i className="fas fa-clock"></i>20 min
            </span>
          </div>
        </div>
        <div id="menu">
          <h2>Menu</h2>
          <h3>Smoothie Bowls</h3>
          <ul>
            <li>
              <span className="name">Green Godess</span>
              <span className="price">
                $5 <i className="fas fa-plus"></i>
              </span>
            </li>
            <li>
              <span className="name">Tutti Frutti</span>
              <span className="price">
                $10 <i className="fas fa-plus"></i>
              </span>
            </li>
            <li>
              <span className="name">Dragonball</span>
              <span className="price">
                $10 <i className="fas fa-plus"></i>
              </span>
            </li>
          </ul>
          <h3>Veggie Bowls</h3>
          <ul>
            <li>
              <span className="name">Avocado Madness</span>
              <span className="price">
                $12 <i className="fas fa-plus"></i>
              </span>
            </li>
            <li>
              <span className="name">Burrito Bandito</span>
              <span className="price">
                $15 <i className="fas fa-plus"></i>
              </span>
            </li>
          </ul>
          <h3>Drinks</h3>
          <ul>
            <li>
              <span className="name">Pure Coconut</span>
              <span className="price">
                $4 <i className="fas fa-plus"></i>
              </span>
            </li>
            <li>
              <span className="name">Choco Lava</span>
              <span className="price">
                $8 <i className="fas fa-plus"></i>
              </span>
            </li>
          </ul>
        </div>
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
