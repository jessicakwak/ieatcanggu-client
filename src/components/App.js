import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/global.css";
import Restaurants from "./restaurants";
import Restaurant from "./restaurant";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/restaurant/:id" component={Restaurant} />
          {/*Will use the line above. Line below to be deleted(just for testing purposes)*/}
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/" component={Restaurants} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
