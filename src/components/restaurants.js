import React from "react";

class Restaurants extends React.Component {
  render() {
    return (
      <nav>
        <div id="logo"></div>
        <ul>
          <li>
            <a href="/" style={{ borderColor: "#DD3C3E" }}>
              <span style={{ color: "#DD3C3E" }}>Italian</span>
            </a>
          </li>
          <li>
            <a href="/" style={{ borderColor: "#3A3335" }}>
              <span style={{ color: "#3A3335" }}>Burger</span>
            </a>
          </li>
          <li>
            <a href="/" style={{ borderColor: "#40C9A2" }}>
              <span style={{ color: "#40C9A2" }}>Vegetarian</span>
            </a>
          </li>
          <li>
            <a href="/" style={{ borderColor: "#F2B430" }}>
              <span style={{ color: "#F2B430" }}>Breakfast</span>
            </a>
          </li>
          <li>
            <a href="/" style={{ borderColor: "#590348" }}>
              <span style={{ color: "#590348" }}>Japanese</span>
            </a>
          </li>
        </ul>
        <select>
          <option value="">Sort by:</option>
          <option value="">Price</option>
          <option value="">Delivery Time</option>
          <option value="">Likes</option>
        </select>
        <input type="text" placeholder="Search..." />
      </nav>
    );
  }
}

export default Restaurants;
