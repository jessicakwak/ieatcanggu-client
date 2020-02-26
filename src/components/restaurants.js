import React from "react";

class Restaurants extends React.Component {
  render() {
    return (
      <nav>
        <div id="logo"></div>
        <ul>
          <li>
            <a href="/">
              <span>Italian</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Burger</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Vegetarian</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Breakfast</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Japanese</span>
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
