import React from "react";
import { Link } from "react-router-dom";

const NavBrand = ()=> {
    return (
      <nav>
        <Link to="/">
          <div className="logo"></div>
        </Link>
      </nav>
    );
}

export default NavBrand;
