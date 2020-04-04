import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

class Thumbnails extends React.Component {
  state = {
    restaurant: this.props.restaurant
  };
  componentWillReceiveProps(nextProp) {
    this.setState({ restaurant: nextProp.restaurant });
  }

  render() {
    return (
      <Grid item xs={12} sm={6} lg={4}>
        <Link
          className="link"
          to={`/restaurant/${this.state.restaurant._id}`}
          key={this.state.restaurant._id}
        >
          <div
            className="card"
            onMouseEnter={x => {
              this.props.thumbnailHover(this.state.restaurant._id);
            }}
            onMouseLeave={x => {
              this.props.thumbnailLeave();
            }}
          >
            <div
              className="image"
              style={{
                backgroundImage: `url(${this.state.restaurant.images[0]})`
              }}
            ></div>
            <div className="region">{this.state.restaurant.city}</div>
            <div className="details">
              <h3>{this.state.restaurant.name}</h3>
              <p>{this.state.restaurant.description}</p>
              <ul className="categories">
                {this.state.restaurant.type.map((t, i) => {
                  return (
                    <li className={t.name} key={i}>
                      {t.name}
                    </li>
                  );
                })}
              </ul>
              <ul className="features">
                {this.state.restaurant.features.map((t, i) => {
                  return (
                    <li className={t.name} key={i}>
                      {t.name === "Quality Food" ? (
                        <i className="fas fa-utensils">
                          <span className="tooltiptxt">Quality food</span>
                        </i>
                      ) : t.name === "Good for kids" ? (
                        <i className="fas fa-baby">
                          <span className="tooltiptxt">Good for kids</span>
                        </i>
                      ) : t.name === "Working" ? (
                        <i className="fas fa-laptop">
                          <span className="tooltiptxt">Good for Working</span>
                        </i>
                      ) : t.name === "Happy Hour" ? (
                        <i className="far fa-laugh-beam">
                          <span className="tooltiptxt">Happy Hour</span>
                        </i>
                      ) : t.name === "Cocktail" ? (
                        <i className="fas fa-cocktail">
                          <span className="tooltiptxt">Good Cocktail</span>
                        </i>
                      ) : t.name === "Date night" ? (
                        <i className="fas fa-comments">
                          <span className="tooltiptxt">Date Night</span>
                        </i>
                      ) : (
                        t.name
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="info">
                <div className="price">
                  {[...Array(this.state.restaurant.price)].map((e, i) => {
                    return <span key={i}>$</span>;
                  })}
                </div>
                <div className="rating">
                  {[...Array(this.state.restaurant.rating)].map((e, i) => {
                    return <i className="fas fa-star" key={i}></i>;
                  })}
                  {[...Array(5 - this.state.restaurant.rating)].map((e, i) => {
                    return <i className="far fa-star" key={i}></i>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Grid>
    );
  }
}

export default Thumbnails;
