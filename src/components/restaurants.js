import React from "react";
import axios from "axios";
import Navigation from "./nav";
import Sort from './Sort'
import Thumbnails from "./thumbnails";
import Pin from "./pin";
import GoogleMap from "google-map-react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "../styles/display.css";
import "../styles/map.css";

class Restaurants extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [],
      searchKey: "",
      selectedType: "",
      selectedFeature: "",
      selectedCity: "",
      map: {
        key: {
          key: process.env.REACT_APP_GOOGLEMAP_API
        },
        center: {
          lat: -8.650,
          lng: 115.14
        },
        zoom: 13.8
      },
      wHeight: 0,
      mapHeight: 0
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/restaurants`)
      .then(res => {
        res.data = res.data.sort((a, b) => a.lat - b.lat && b.lng - a.lng);
        // let mapCopy = this.state.map;
        // mapCopy.center.lat =
        //   res.data.map(e => e.lat).reduce((a, b) => a + b) / res.data.length;
        // mapCopy.center.lng =
        //   res.data.map(e => e.lng).reduce((a, b) => a + b) / res.data.length;
        this.setState({
          restaurants: res.data,
        });
      })
      .catch(err => {
        console.log({ err });
      });

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

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
    let restauCopy = this.state.restaurants;
    if (e.target.value === "0") {
      this.setState(prevState=>{
        return {restaurants:prevState.restaurants.sort((a, b) => a.price - b.price)}
      })
    }
     else if (e.target.value === "1") {
      this.setState(prevState=>{
        return {restaurants:prevState.restaurants.sort((a, b) => b.price - a.price)}
      })
    } else if (e.target.value === "2") {
      this.setState(prevState=>{
        return {restaurants:prevState.restaurants.sort((a, b) => b.rating - a.rating)}
      })
    } else if (e.target.value === "3") {
      this.setState(prevState=>{
        return {restaurants:prevState.restaurants.sort((a, b) => a.name>b.name?1:-1)}
      })
    }else if (e.target.value === "4") {
      this.setState(prevState=>{
        return {restaurants:prevState.restaurants.sort((a, b) => a.name>b.name?-1:1)}
      })
    }
    this.setState({ restaurants: restauCopy });
  };
  search = e =>{
    this.setState({
      searchKey:e.target.value.toLowerCase()
    },)
}
filter= e=>{
  if(e.target.id=="cuisine"){
    this.setState({
      selectedType:e.target.value.toLowerCase()
    })
  }else if(e.target.id=="features"){
    this.setState({
      selectedFeature:e.target.value.toLowerCase()
    })
  }else{
    this.setState({
      selectedCity:e.target.value.toLowerCase()
    })
  }
}

  render() {
    return (
<>
        <Navigation search={this.search} filter={this.filter}/>
        <div className="display">
          <Grid container>
            {/* for thumbnails */}
            <Box clone order={{ xs: 2, md: 1 }}>
              <Grid item xs={12} md={7} lg={8}>
                <div
                  className="thumnails"
                  style={{
                    height: `${this.state.wHeight}px`,
                    overflow: "auto"
                  }}
                >
                 <Sort sort={this.sort}/>
                  <Grid container>
                    {this.state.restaurants
                    .filter(e=>
                      (e.name.toLowerCase().includes(this.state.searchKey)
                      ||e.description.toLowerCase().includes(this.state.searchKey)
                      ||e.city.name.toLowerCase().includes(this.state.searchKey)
                      ||e.type.map(e=>e.name.toLowerCase()).join('').includes(this.state.searchKey))
                      &&e.type.map(e=>e.name.toLowerCase()).join('').includes(this.state.selectedType)
                      &&e.features.map(e=>e.name.toLowerCase()).join('').includes(this.state.selectedFeature)
                      &&e.city.name.toLowerCase().includes(this.state.selectedCity)
                      )
                    .map((r, i) => {
                      return (
                        <>
                        <Thumbnails
                          restaurant={r}
                          thumbnailHover={this.thumbnailHover}
                          thumbnailLeave={this.thumbnailLeave}
                          key={i}
                        /></>
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
                      return (
                        <Pin restaurant={r} lat={r.lat} lng={r.lng} key={i} />
                      );
                    })}
                  </GoogleMap>
                </div>
              </Grid>
            </Box>
          </Grid>
        </div>
</>
    );
  }
}

export default Restaurants;
