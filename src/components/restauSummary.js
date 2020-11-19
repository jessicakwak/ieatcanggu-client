import React from "react";
import Grid from "@material-ui/core/Grid";

const RestauSummary = (props)=> {
const {features, price, rating} = props.restaurant
    return (
      <div className="box">
        <Grid container>
          <Grid item xs={12} md={7}>
            <div className="topFeatures">
              <ul className="features">
                {features.map((t, i) => {
                  return (
                    <li className={t.name} key={i}>
                      {t.name === "Quality Food" ? (
                        <i className="fas fa-utensils">
                          <br />
                          <span className="ftxt">Quality food</span>
                        </i>
                      ) : t.name === "Good for kids" ? (
                        <i className="fas fa-baby">
                          <br />
                          <span className="ftxt">Good for kids</span>
                        </i>
                      ) : t.name === "Working" ? (
                        <i className="fas fa-laptop">
                          <br />
                          <span className="ftxt">Good for Working</span>
                        </i>
                      ) : t.name === "Happy Hour" ? (
                        <i className="far fa-laugh-beam">
                          <br />
                          <span className="ftxt">Happy Hour</span>
                        </i>
                      ) : t.name === "Cocktail" ? (
                        <i className="fas fa-cocktail">
                          <br />
                          <span className="ftxt">Good Cocktail</span>
                        </i>
                      ) : t.name === "Date night" ? (
                        <i className="fas fa-comments">
                          <br />
                          <span className="ftxt">Date Night</span>
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
                  {[...Array(price)].map((e, i) => {
                    return <span key={i}>$</span>;
                  })}
                  {price === 4 ? (
                    <p className="comment">100-200K+ per dish</p>
                  ) : price === 3 ? (
                    <p className="comment">90-150K per dish</p>
                  ) : price === 2 ? (
                    <p className="comment">70K-120K per dish</p>
                  ) : (
                    <p className="comment">20K-80K per dish</p>
                  )}
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="priceAndRating">
                  <span>Rating: </span>
                  {[...Array(rating)].map((e, i) => {
                    return <i className="fas fa-star" key={i}></i>;
                  })}
                  {rating === 5 ? (
                    <p className="fav">
                      Favorite! <i className="fas fa-grin-hearts"></i>
                    </p>
                  ) : rating === 4 ? (
                    <p className="exc">
                      Excellent <i className="far fa-grin-stars"></i>
                    </p>
                  ) : rating === 3 ? (
                    <p className="comment">Good</p>
                  ) : rating === 2 ? (
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
export default RestauSummary;
