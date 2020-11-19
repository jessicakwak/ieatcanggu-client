import React from "react";
import axios from "axios";
import "../styles/nav.css";
import NavBrand from "./NavBrand";

class Navigation extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      types: [],
      features: [],
      cities:[]
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
      axios
      .get(`${process.env.REACT_APP_API}/cities`)
      .then(res => {
        this.setState({
          cities: res.data
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
          <select id="cuisine" onChange={this.props.filter}>
            <option value="">Types</option>
            {this.state.types.map((e, i) => {
              return (
                <option value={e.name} key={i}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <select id="features" onChange={this.props.filter}>
          <option value="">Features</option>
            {this.state.features.map((e, i) => {
              return (
                <option value={e.name} key={i}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <select id="city" onChange={this.props.filter}>
          <option value="">Region</option>
            {this.state.cities.map((e, i) => {
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
            placeholder="Search any keywords"
            onChange={this.props.search}/>
        </div>
      </>
    );
  }
}

export default Navigation;
