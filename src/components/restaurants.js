import React from "react";
import axios from "axios";
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
      zoom: 14.4
    },
    wHeight: 0,
    mapHeight: 0
  };

  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/restaurants`)
      .then(res => {
        res.data = res.data.sort((a, b) => a.lat - b.lat && b.lng - a.lng);
        let mapCopy = this.state.map;
        mapCopy.center.lat =
          res.data.map(e => e.lat).reduce((a, b) => a + b) / res.data.length;
        mapCopy.center.lng =
          res.data.map(e => e.lng).reduce((a, b) => a + b) / res.data.length;
        this.setState({
          restaurants: res.data,
          searched: res.data,
          map: mapCopy
        });
      })
      .catch(err => {
        console.log({ err });
      });

    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  search = e => {
    // console.log(this.state.selectedType == "");
    let restauCopy = this.state.restaurants;

    restauCopy = restauCopy.filter(r => {
      return (
        (r.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          r.description.toLowerCase().includes(e.target.value.toLowerCase())) &&
        r.type.map(t => t.name).includes(this.state.selectedType) &&
        r.features
          .map(e => e.name)
          .filter(f => f.includes(this.state.selectedFeature))
      );
    });

    this.setState({
      searched: restauCopy,
      searchKey: e.target.value.toLowerCase()
    });
  };

  typeSearch = e => {
    if (e.target.value !== "All") {
      this.setState({
        searched: this.state.restaurants.filter(i => {
          return (
            i.type.map(t => t.name).includes(e.target.value) &&
            i.features
              .map(f => f.name)
              .filter(j => j.includes(this.state.selectedFeature)) &&
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
            k.features
              .map(f => f.name)
              .filter(j => j.includes(this.state.selectedFeature)) &&
            (k.name.toLowerCase().includes(this.state.searchKey) ||
              k.description.toLowerCase().includes(this.state.searchKey))
        ),
        selectedType: ""
      });
    }
  };

  featureSearch = e => {
    if (e.target.value !== "All") {
      this.setState({
        searched: this.state.restaurants.filter(i => {
          return (
            i.type
              .map(f => f.name)
              .filter(j => j.includes(this.state.selectedType)) &&
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
            k.type
              .map(f => f.name)
              .filter(j => j.includes(this.state.selectedType)) &&
            (k.name.toLowerCase().includes(this.state.searchKey) ||
              k.description.toLowerCase().includes(this.state.searchKey))
        ),
        selectedFeature: ""
      });
    }
  };

  thumbnailHover = id => {
    let theseRestau = this.state.restaurants;
    theseRestau.map(e => (e.selected = false));
    theseRestau.find(e => e._id === id).selected = true;
    this.setState({ restaurants: theseRestau });
  };

  thumbnailLeave = () => {
    let theseRestau = this.state.restaurants;
    theseRestau.map(e => (e.selected = false));
    this.setState(theseRestau);
  };

  updateDimensions = () => {
    if (window.innerWidth >= 960) {
      this.setState({
        //vertical map
        wHeight: window.innerHeight * 0.89,
        mapHeight: window.innerHeight * 0.89
      });
    } else if (window.innerWidth < 960 && window.innerWidth >= 658) {
      this.setState({
        //vertical map
        wHeight: window.innerHeight * 0.59,
        mapHeight: window.innerHeight * 0.3
      });
    } else if (window.innerWidth < 658 && window.innerWidth >= 600) {
      this.setState({
        //vertical map
        wHeight: window.innerHeight * 0.55,
        mapHeight: window.innerHeight * 0.3
      });
    } else if (window.innerWidth < 600 && window.innerWidth >= 400) {
      this.setState({
        //vertical map
        wHeight: window.innerHeight * 0.6,
        mapHeight: window.innerHeight * 0.25
      });
    } else {
      this.setState({
        //vertical map
        wHeight: window.innerHeight * 0.61,
        mapHeight: window.innerHeight * 0.2
      });
    }
  };

  sort = e => {
    // console.log(e.target.value);
    let restauCopy = this.state.searched;
    if (e.target.value == 0) {
      restauCopy.sort((a, b) => a.price - b.price);
    } else if (e.target.value == 1) {
      restauCopy.sort((a, b) => b.price - a.price);
    } else if (e.target.value == 2) {
      restauCopy.sort((a, b) => b.rating - a.rating);
    }
    this.setState({ searched: restauCopy });
    // this.forceUpdate();
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
                  <div className="sort">
                    <span>Sort by</span>
                    <select onChange={this.sort}>
                      <option default>Default</option>
                      <option value="0">Price ▲</option>
                      <option value="1">Price ▼</option>
                      <option value="2">Rating ▼</option>
                    </select>
                  </div>
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
