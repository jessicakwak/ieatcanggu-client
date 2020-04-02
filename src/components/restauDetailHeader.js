import React from "react";
import { Link } from "react-router-dom";

class RestauDetailHeader extends React.Component {
  state = {
    restaurant: {
      name: "",
      type: [],
      address: "",
      phone: "",
      website: ""
    }
  };
  componentWillMount() {
    this.setState({ restaurant: this.props.restaurant });
  }
  componentWillReceiveProps(nextProp) {
    this.setState({ restaurant: nextProp.restaurant });
  }

  render() {
    return (
      <div className="header">
        <div className="summary">
          <h2>{this.state.restaurant.name}</h2>
          <ul className="categories restau">
            {this.state.restaurant.type.map((t, i) => {
              return (
                <li className={t.name} key={i}>
                  {t.name}
                </li>
              );
            })}
          </ul>
          <i class="fas fa-map-marker-alt"></i>
          <span className="contactInfo">{this.state.restaurant.address}</span>
          <br />
          <i class="fas fa-phone"></i>
          <span className="contactInfo">{this.state.restaurant.phone}</span>
          <span className="contactInfo">•</span>
          <i class="fas fa-mouse-pointer"></i>
          <a href={this.state.restaurant.website}>
            <span className="contactInfo">Website</span>
          </a>
        </div>
        <Link to="/">
          <span className="back">
            Back to the list <i class="fas fa-chevron-right"></i>
          </span>
        </Link>
      </div>
    );
  }
}

export default RestauDetailHeader;
