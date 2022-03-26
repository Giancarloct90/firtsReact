import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import Home from "./Home";
import Navbar from "./Navbar";
import CreateBlog from "./CreateBlog";
import DetailsBlog from "./DetailsBlog";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <CreateBlog />
          </Route>
          <Route path="/details/:id">
            <DetailsBlog />
          </Route>
          <Route path={"*"}>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
