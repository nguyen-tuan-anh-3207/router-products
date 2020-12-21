import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";

import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu*/}
          <Menu />
          {/*Nội dung*/}
          <Switch>
            {this.showContentMenus(routes)}
            {/* <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/link" component={Links} />
          <Route component = {NotFound}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
      return result;
    }
  };
}

export default App;
