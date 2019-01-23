import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FloorPlan from "./pages/FloorPlan";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/floorplan" component={FloorPlan} />
        </div>
      </Router>
    );
  }
}

export default App;
