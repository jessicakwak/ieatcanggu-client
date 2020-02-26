import React from "react";
import NavBar from "./nav";
import Thumbnail from "./thumbnail";

class Restaurants extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div id="page">
          <Thumbnail />
        </div>
      </>
    );
  }
}

export default Restaurants;
