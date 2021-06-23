import { Redirect, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AllVideosComponent from "./AllVideosComponent";
import UploadVideoComponent from "./UploadVideoComponent";
const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <AllVideosComponent/>
        </Route>
        <Route exact path="/upload">
        <UploadVideoComponent/>
        </Route>
        <Route exact path="/">
        <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
