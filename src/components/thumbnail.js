import React from "react";

class Thumbnail extends React.Component {
  render() {
    return (
      <a href="restaurant.html" className="restaurant">
        <div
          className="photo"
          style={{ backgroundImage: 'url("https://bit.ly/2vx8SGX")' }}
        ></div>
        <h3>Bella Italia</h3>
        <ul className="categories">
          <li style={{ background: "#DD3C3E" }}>Italian</li>
        </ul>
        <div className="info">
          <span className="price">
            <i className="fas fa-dollar-sign"></i>20
          </span>
          <span className="likes">
            <i className="fas fa-thumbs-up"></i>347
          </span>
          <span className="time">
            <i className="fas fa-clock"></i>15 min
          </span>
        </div>
      </a>
    );
  }
}

export default Thumbnail;
