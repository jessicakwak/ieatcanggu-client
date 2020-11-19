import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const Thumbnails =(props)=> {
  const {restaurant, thumbnailHover, thumbnailLeave} =props

    return (
      <Grid item xs={12} sm={6} lg={4}>
        <Link
          className="link"
          to={`/restaurant/${restaurant._id}`}
          key={restaurant._id}
        >
          <div
            className="card"
            onMouseEnter={x => {
              thumbnailHover(restaurant._id);
            }}
            onMouseLeave={x => {
              thumbnailLeave();
            }}
          >
            <div
              className="image"
              style={{
                backgroundImage: `url(${restaurant.images[0]})`
              }}
            ></div>
            <div className="region">{restaurant.city}</div>
            <div className="details">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <ul className="categories">
                {restaurant.type.map((t, i) => {
                  return (
                    <li className={t.name} key={i}>
                      {t.name}
                    </li>
                  );
                })}
              </ul>
              <ul className="features">
                {restaurant.features.map((t, i) => {
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
                  {[...Array(restaurant.price)].map((e, i) => {
                    return <span key={i}>$</span>;
                  })}
                </div>
                <div className="rating">
                  {[...Array(restaurant.rating)].map((e, i) => {
                    return <i className="fas fa-star" key={i}></i>;
                  })}
                  {[...Array(5 - restaurant.rating)].map((e, i) => {
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

export default Thumbnails;
