import React from "react";

import axios from "axios";
import "../styles/nav.css";
import NavBrand from "./topNav";

class Navigation extends React.Component {
  state = {
    types: [],
    features: []
  };
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/types`)
      .then(res => {
        this.setState({
          types: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });

    axios
      .get(`${process.env.REACT_APP_API}/features`)
      .then(res => {
        this.setState({
          features: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });
  }
  render() {
    return (
      <>
        <NavBrand />
        <div className="filters">
          <label>Cuisine</label>
          <select id="cuisine" onChange={this.props.typeSearch}>
            <option value="All">All</option>
            {this.state.types.map(e => {
              return <option value={e.name}>{e.name}</option>;
            })}
          </select>
          <label>Features</label>
          <select id="features" onChange={this.props.featureSearch}>
            <option value="All">All</option>
            {this.state.features.map(e => {
              return <option value={e.name}>{e.name}</option>;
            })}
          </select>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            onChange={this.props.search}
          />
        </div>
      </>
    );
  }
}

export default Navigation;
