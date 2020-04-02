import React from "react";
import { Link } from "react-router-dom";

class NavBrand extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <div className="logo"></div>
        </Link>
      </nav>
    );
  }
}

export default NavBrand;
