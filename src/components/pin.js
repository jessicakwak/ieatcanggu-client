import React from "react";

class Pin extends React.Component {
  state = {
    restaurant: this.props.restaurant,
    lat: this.props.lat,
    lng: this.props.lng
  };
  UNSAFE_componentWillMount() {
    this.setState({
      restaurant: this.props.restaurant,
      lat: this.props.lat,
      lng: this.props.lng
    });
  }
  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      restaurant: this.props.restaurant,
      lat: this.props.lat,
      lng: this.props.lng
    });
  }
  render() {
    return (
      <div
        className={this.state.restaurant.selected ? "pin selected" : "pin"}
        lat={this.state.lat}
        lng={this.state.lng}
      >
        <label>{this.state.restaurant.name}</label>
      </div>
    );
  }
}

export default Pin;
