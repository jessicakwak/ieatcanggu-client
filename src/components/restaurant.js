import React from "react";
import axios from "axios";
import NavBrand from "./NavBrand";
import Gallery from "./gallery";
import RestauDetailHeader from "./restauDetailHeader";
import RestauSummary from "./restauSummary";
import Pin from "./pin";
import "../styles/restaurantDetails.css";
import Grid from "@material-ui/core/Grid";
import GoogleMap from "google-map-react";

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant: {
        name: "",
        images: [],
        type: [],
        features: [],
        address: "",
        phone: "",
        website: "",
        lat: 0,
        lng: 0,
        selected: true,
        recommend: [],
        menu: ""
      },
      map: {
        key: {
          key: process.env.REACT_APP_GOOGLEMAP_API
        },
        center: {
          lat: -8.655,
          lng: 115.14
        },
        zoom: 13
      },
      vHeight: 0
    };
  }

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_API}/restaurants/${this.props.match.params.id}`
      )
      .then(res => {
        let restauLatLng = {
          key: {
            key: "AIzaSyBKMVj4gaJLU9GTV1zOaWQj7ggKVbXQep0"
          },
          center: {
            lat: res.data.lat,
            lng: res.data.lng
          },
          zoom: 16
        };
        res.data.selected = true;
        res.data.detail = true;
        this.setState({ restaurant: res.data, map: restauLatLng });
      })
      .catch(err => console.log(err));
    this.setState({ vHeight: window.innerHeight * 0.95 });
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ vHeight: window.innerHeight * 0.95 });
  };
  
  render() {
    return (
      <>
        <NavBrand />
        <div
          className="restauDetails"
          style={{ height: `${this.state.vHeight}px` }}
        >
          <RestauDetailHeader restaurant={this.state.restaurant} />
          <Gallery images={this.state.restaurant.images} />
          <div className="restauInfo">
            <RestauSummary restaurant={this.state.restaurant} />
          </div>
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className="mainReview">
                <h3>{this.state.restaurant.description}</h3>
                <p>{this.state.restaurant.review}</p>
                <h3>You MUST try...</h3>
                <ul className="recommend">
                  {this.state.restaurant.recommend.map((e, i) => {
                    return <li key={i}>{e}</li>;
                  })}
                  <a href={this.state.restaurant.menu}>
                    <li>
                      View menu <i className="fas fa-chevron-right"></i>
                    </li>
                  </a>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="detailMap">
                <GoogleMap
                  bootstrapURLKeys={this.state.map.key}
                  center={this.state.map.center}
                  zoom={this.state.map.zoom}
                >
                  <a href={`https://maps.google.com/?q=${this.state.restaurant.lat},${this.state.restaurant.lng}`} target="_blank">
                  <Pin
                    restaurant={this.state.restaurant}
                    lat={this.state.restaurant.lat}
                    lng={this.state.restaurant.lng}
                  />
                  </a>
                  
                </GoogleMap>
              </div>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default Restaurant;
