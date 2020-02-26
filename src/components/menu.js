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
            .filter(x => x.category == "Appetizer")
            .map((e, i) => {
              return (
                <li>
                  <span className="name">{e.name}</span>
                  <span className="price">
                    ${e.price}{" "}
                    <span onClick={x => this.props.addBasket(e)}>
                      <i className="fas fa-plus"></i>
                    </span>
                  </span>
                </li>
              );
            })}
        </ul>
        <h3>Main Dish</h3>
        <ul>
          {this.state.menu
            .filter(x => x.category == "Main Dish")
            .map((e, i) => {
              return (
                <li>
                  <span className="name">{e.name}</span>
                  <span className="price">
                    ${e.price}
                    <span onClick={x => this.props.addBasket(e)}>
                      <i className="fas fa-plus"></i>
                    </span>
                  </span>
                </li>
              );
            })}
        </ul>

        <h3>Dessert</h3>
        <ul>
          {this.state.menu
            .filter(x => x.category == "Dessert")
            .map((e, i) => {
              return (
                <li>
                  <span className="name">{e.name}</span>
                  <span className="price">
                    ${e.price}{" "}
                    <span onClick={x => this.props.addBasket(e)}>
                      <i className="fas fa-plus"></i>
                    </span>
                  </span>
                </li>
              );
            })}
        </ul>
        <h3>Drinks</h3>
        <ul>
          {this.state.menu
            .filter(x => x.category == "Drinks")
            .map((e, i) => {
              return (
                <li>
                  <span className="name">{e.name}</span>
                  <span className="price">
                    ${e.price}{" "}
                    <span onClick={x => this.props.addBasket(e)}>
                      <i className="fas fa-plus"></i>
                    </span>
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
