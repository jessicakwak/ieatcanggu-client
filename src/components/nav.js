import React from "react";
import axios from "axios";
import "../styles/nav.css";
import NavBrand from "./NavBrand";

class Navigation extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      types: [],
      features: []
    };
  }
  
  componentDidMount() {
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
          <select id="cuisine">
            <option value="All">All</option>
            {this.state.types.map((e, i) => {
              return (
                <option value={e.name} key={i}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <label>Features</label>
          <select id="features">
            <option value="All">All</option>
            {this.state.features.map((e, i) => {
              return (
                <option value={e.name} key={i}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            className="search"
            placeholder="Search..."/>
        </div>
      </>
    );
  }
}

export default Navigation;
