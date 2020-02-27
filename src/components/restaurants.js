import React from "react";
import axios from "axios";
import NavBar from "./nav";
import Thumbnail from "./thumbnail";

class Restaurants extends React.Component {
  state = {
    restaurants: []
  };

  componentWillMount() {
    axios
      .get(`https://team03-deliveroo-api.herokuapp.com/restaurants`)
      .then(res => {
        this.setState({ restaurants: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <NavBar />
        <div id="page">
          {this.state.restaurants.map((r, i) => {
            return <Thumbnail restaurant={r} />;
          })}
        </div>
      </>
    );
  }
}

export default Restaurants;
