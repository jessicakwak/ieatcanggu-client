import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Restaurants from "./restaurants";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Restaurants} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
