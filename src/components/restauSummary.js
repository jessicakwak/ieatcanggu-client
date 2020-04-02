import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

class RestauSummary extends React.Component {
  state = {
    restaurant: {
      features: [],
      price: 0,
      rating: 0
    }
  };

  componentWillMount() {
    this.setState({
      restaurant: this.props.restaurant,
      empty: this.props.empty
    });
  }
  componentWillReceiveProps(nextProp) {
    this.setState({ restaurant: nextProp.restaurant, empty: nextProp.empty });
  }
  render() {
    return (
      <div className="box">
        <Grid container>
          <Grid item xs={12} md={7}>
            <div className="topFeatures">
              <ul className="features">
                {this.state.restaurant.features.map((t, i) => {
                  return (
                    <li className={t.name} key={i}>
                      {t.name == "Quality Food" ? (
                        <i class="fas fa-utensils">
                          <br />
                          <span class="ftxt">Quality food</span>
                        </i>
                      ) : t.name == "Good for kids" ? (
                        <i class="fas fa-baby">
                          <br />
                          <span class="ftxt">Good for kids</span>
                        </i>
                      ) : t.name == "Working" ? (
                        <i class="fas fa-laptop">
                          <br />
                          <span class="ftxt">Good for Working</span>
                        </i>
                      ) : t.name == "Happy Hour" ? (
                        <i class="far fa-laugh-beam">
                          <br />
                          <span class="ftxt">Happy Hour</span>
                        </i>
                      ) : t.name == "Cocktail" ? (
                        <i class="fas fa-cocktail">
                          <br />
                          <span class="ftxt">Good Cocktail</span>
                        </i>
                      ) : t.name == "Date night" ? (
                        <i class="fas fa-comments">
                          <br />
                          <span class="ftxt">Date Night</span>
                        </i>
                      ) : (
                        t.name
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} md={5}>
            <Grid container>
              <Grid item xs={6}>
                <div className="priceAndRating">
                  <span>Price Range: </span>
                  {[...Array(this.state.restaurant.price)].map(e => {
                    return <span>$</span>;
                  })}
                  {this.state.restaurant.price == 4 ? (
                    <p className="comment">100-180K+ per dish</p>
                  ) : this.state.restaurant.price == 3 ? (
                    <p className="comment">90-200K per dish</p>
                  ) : this.state.restaurant.price == 2 ? (
                    <p className="comment">70K-150K per dish</p>
                  ) : (
                    <p className="comment">20K-60K per dish</p>
                  )}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="priceAndRating">
                  <span>Rating: </span>
                  {[...Array(this.state.restaurant.rating)].map(e => {
                    return <i class="fas fa-star"></i>;
                  })}
                  {this.state.restaurant.rating == 5 ? (
                    <p className="fav">
                      Favorite! <i class="fas fa-grin-hearts"></i>
                    </p>
                  ) : this.state.restaurant.rating == 4 ? (
                    <p className="exc">
                      Excellent <i class="far fa-grin-stars"></i>
                    </p>
                  ) : this.state.restaurant.rating == 3 ? (
                    <p className="comment">Good</p>
                  ) : this.state.restaurant.rating == 2 ? (
                    <p className="comment">Ok</p>
                  ) : (
                    <p className="comment">
                      <q>Could be better</q>
                    </p>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default RestauSummary;
