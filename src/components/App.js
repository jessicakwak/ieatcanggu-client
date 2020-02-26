import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/global.css";
import Restaurants from "./restaurants";
import Restaurant from "./restaurant";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/" component={Restaurants} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
