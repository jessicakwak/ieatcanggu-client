import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "./nav";
import Thumbnails from "./thumbnails";
import Pin from "./pin";
import "../styles/display.css";
import "../styles/map.css";
import GoogleMap from "google-map-react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

class Restaurants extends React.Component {
  state = {
    restaurants: [],
    searched: [],
    searchKey: "",
    selectedType: "",
    selectedFeature: "",
    map: {
      key: {
        key: "AIzaSyBKMVj4gaJLU9GTV1zOaWQj7ggKVbXQep0"
      },
      center: {
        lat: -8.655,
        lng: 115.14
      },
      zoom: 14
    },
    wHeight: 0,
    mapHeight: 0
  };

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/restaurants`)
      .then(res => {
        this.setState({
          restaurants: res.data,
          searched: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });

    if (window.innerWidth > 960) {
      //bigger than ipad (ipad pro and desktop, vertical maps)
      this.setState({
        wHeight: window.innerHeight - 100,
        mapHeight: window.innerHeight - 100
      });
    } else if (window.innerWidth <= 960 && window.innerWidth > 781) {
      //tablet,bigger than most of phones (ipad, surface etc)
      this.setState({
        wHeight: window.innerHeight * 0.58,
        mapHeight: window.innerHeight * 0.32
      });
    } else {
      this.setState({
        //iPhone X, pixel 2XL 0.46, 0.49
        wHeight: window.innerHeight * 0.6,
        mapHeight: window.innerHeight * 0.25
      });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  search = e => {
    this.setState({
      searched: this.state.restaurants.filter(r => {
        return (
          r.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          r.description.toLowerCase().includes(e.target.value.toLowerCase())
        );
      }),
      searchKey: e.target.value.toLowerCase()
    });
  };

  typeSearch = e => {
    if (e.target.value != "All") {
      this.setState({
        searched: this.state.restaurants.filter(i => {
          return (
            i.type.map(t => t.name).includes(e.target.value) &&
            (i.name.toLowerCase().includes(this.state.searchKey) ||
              i.description.toLowerCase().includes(this.state.searchKey))
          );
        }),
        selectedType: e.target.value
      });
    } else {
      this.setState({
        searched: this.state.restaurants.filter(
          k =>
            k.name.toLowerCase().includes(this.state.searchKey) ||
            k.description.toLowerCase().includes(this.state.searchKey)
        ),
        selectedType: ""
      });
    }
  };

  featureSearch = e => {
    if (e.target.value != "All") {
      this.setState({
        searched: this.state.restaurants.filter(i => {
          return (
            i.features.map(t => t.name).includes(e.target.value) &&
            (i.name.toLowerCase().includes(this.state.searchKey) ||
              i.description.toLowerCase().includes(this.state.searchKey))
          );
        }),
        selectedFeature: e.target.value
      });
    } else {
      this.setState({
        searched: this.state.restaurants.filter(
          k =>
            k.name.toLowerCase().includes(this.state.searchKey) ||
            k.description.toLowerCase().includes(this.state.searchKey)
        ),
        selectedFeature: ""
      });
    }
  };

  thumbnailHover = id => {
    let theseRestau = this.state.restaurants;
    theseRestau.map(e => (e.selected = false));
    theseRestau.find(e => e._id == id).selected = true;
    this.setState({ restaurants: theseRestau });
  };

  thumbnailLeave = () => {
    let theseRestau = this.state.restaurants;
    theseRestau.map(e => (e.selected = false));
    this.setState(theseRestau);
  };

  updateDimensions = () => {
    if (window.innerWidth > 960) {
      //bigger than ipad (ipad pro and desktop, vertical maps)
      this.setState({
        wHeight: window.innerHeight - 100,
        mapHeight: window.innerHeight - 100
      });
    } else if (window.innerWidth <= 960 && window.innerWidth > 781) {
      //tablet,bigger than most of phones (ipad, surface etc)
      this.setState({
        wHeight: window.innerHeight * 0.6,
        mapHeight: window.innerHeight * 0.3
      });
    } else {
      this.setState({
        //iPhone X, pixel 2XL 0.46, 0.49
        wHeight: window.innerHeight * 0.6,
        mapHeight: window.innerHeight * 0.25
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Navigation
          search={this.search}
          typeSearch={this.typeSearch}
          featureSearch={this.featureSearch}
        />

        <div className="display" style={{ overflow: "hidden" }}>
          <Grid container>
            <Box clone order={{ xs: 2, md: 1 }}>
              <Grid item xs={12} md={7} lg={8}>
                <div
                  className="thumnails"
                  style={{
                    height: `${this.state.wHeight}px`,
                    overflow: "auto"
                  }}
                >
                  <Grid container>
                    {this.state.searched.map(r => {
                      return (
                        <Thumbnails
                          restaurant={r}
                          thumbnailHover={this.thumbnailHover}
                          thumbnailLeave={this.thumbnailLeave}
                        />
                      );
                    })}
                  </Grid>
                </div>
              </Grid>
            </Box>
            <Box clone order={{ xs: 1, md: 2 }}>
              <Grid item xs={12} md={5} lg={4}>
                <div
                  className="map"
                  style={{ height: `${this.state.mapHeight}px` }}
                >
                  <GoogleMap
                    bootstrapURLKeys={this.state.map.key}
                    center={this.state.map.center}
                    zoom={this.state.map.zoom}
                  >
                    {this.state.restaurants.map((r, i) => {
                      return <Pin restaurant={r} lat={r.lat} lng={r.lng} />;
                    })}
                  </GoogleMap>
                </div>
              </Grid>
            </Box>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Restaurants;
