import React from "react";

class Thumbnail extends React.Component {
  state = {
    restaurant: this.props.restaurant
  };
  componentWillReceiveProps(nextProp) {
    this.setState({ restaurant: nextProp.restaurant });
  }
  render() {
    return (
      <a href="restaurant.html" className="restaurant">
        <div
          className="photo"
          style={{ backgroundImage: `url(${this.state.restaurant.imgUrl})` }}
        ></div>
        <h3>{this.state.restaurant.name}</h3>
        <ul className="categories">
          {this.state.restaurant.category.map((e, i) => {
            return (
              <li style={{ background: "#DD3C3E" }} key={i}>
                {e}
              </li>
            );
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
      </a>
    );
  }
}

export default Thumbnail;
