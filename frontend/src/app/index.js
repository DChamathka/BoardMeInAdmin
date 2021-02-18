import React, { Component } from "react";
import { BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { AddPost, Guests, Timeline,Owners,Feedbacks, Inquiries, Landingpage } from "../pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Route extract path="/admin" component={Landingpage}/>
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/addpost" component={AddPost} />
          <Route exact path="/guests" component={Guests} />
          <Route exact path="/owners" component={Owners} />
          <Route exact path="/feedback" component={Feedbacks} />
          <Route exact path="/inquiry" component={Inquiries} />
      </Router>
    );
  }
}
export default App;
