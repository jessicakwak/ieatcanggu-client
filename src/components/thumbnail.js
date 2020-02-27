import React from "react";

class Thumbnail extends React.Component {
  state = {
    restaurant: this.props.restaurant
  };
  componentWillReceiveProps(nextProp) {
    this.setState({ restaurant: nextProp.restaurant });
    console.log(nextProp.restaurant);
  }
  calculateAvg = menu => {
    return menu.map(e => e.price).reduce((t, i) => t + i) / menu.length;
  };
  render() {
    return (
      <a
        href={`/restaurant/${this.state.restaurant._id}`}
        className="restaurant"
      >
        <div
          className="photo"
          style={{ backgroundImage: `url(${this.state.restaurant.images[0]})` }}
        ></div>
        <h3>{this.state.restaurant.name}</h3>
        <ul className="categories">
          {this.state.restaurant.category.map((e, i) => {
            return (
              <li key={i} className={e.name}>
                {e.name}
              </li>
            );
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
      </a>
    );
  }
}

export default Thumbnail;
