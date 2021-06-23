import react, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AllVideosComponent from "./AllVideosComponent";
import UploadVideoComponent from "./UploadVideoComponent";
class Main extends Component {
  componentDidMount() {}

  render() {
    const videos = [
      {
        'id':1,
        'name':'video1',
        'thumbnail':'https://source.unsplash.com/400x600/?movie',
        'link':'#'
      },
      {
        'id':2,
        'name':'video2',
        'thumbnail':'https://source.unsplash.com/400x600/?nature',
        'link':'#'
      },
    ];
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={()=><AllVideosComponent videos={videos}/>} />
          <Route exact path="/upload" component={UploadVideoComponent} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Main;
