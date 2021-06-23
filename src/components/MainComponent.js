import react, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AllVideosComponent from "./AllVideosComponent";
import UploadVideoComponent from "./UploadVideoComponent";
class Main extends Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={AllVideosComponent} />
          <Route exact path="/upload" component={UploadVideoComponent} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Main;
