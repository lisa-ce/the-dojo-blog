import React from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Create from "./Create.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails.jsx";  

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/create">
              <Create />
            </Route>



            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>



          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;