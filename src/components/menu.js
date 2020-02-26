import React from "react";

class Menu extends React.Component {
  state = {
    menu: this.props.menu
  };
  componentWillReceiveProps(nextProp) {
    this.setState({
      menu: nextProp.menu
    });
  }
  render() {
    return (
      <div id="menu">
        <h2>Menu</h2>
        <h3>Appetizer</h3>
        <ul>
          {this.state.menu
            .filter(x => x.foodCategory == "Appetizer")
            .map((e, i) => {
              return (
                <li>
                  <span className="name">{e.name}</span>
                  <span className="price">
                    ${e.price} <i className="fas fa-plus"></i>
                  </span>
                </li>
              );
            })}
        </ul>
        <h3>Main Dish</h3>
        <ul>
          {this.state.menu
            .filter(x => x.foodCategory == "Main Dish")
            .map((e, i) => {
              return (
                <li>
                  <span className="name">{e.name}</span>
                  <span className="price">
                    ${e.price} <i className="fas fa-plus"></i>
                  </span>
                </li>
              );
            })}
        </ul>

        <h3>Dessert</h3>
        <ul>
          {this.state.menu
            .filter(x => x.foodCategory == "Dessert")
            .map((e, i) => {
              return (
                <li>
                  <span className="name">{e.name}</span>
                  <span className="price">
                    ${e.price} <i className="fas fa-plus"></i>
                  </span>
                </li>
              );
            })}
        </ul>
        <h3>Drinks</h3>
        <ul>
          {this.state.menu
            .filter(x => x.foodCategory == "Drinks")
            .map((e, i) => {
              return (
                <li>
                  <span className="name">{e.name}</span>
                  <span className="price">
                    ${e.price} <i className="fas fa-plus"></i>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
export default Menu;
