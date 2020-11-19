import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Sign  from "./Pages/Sign";
import Dashboard  from "./Pages/Dashboard";
// import { FeedPage } from "./components/FeedPage";
// import { HomePage } from "./components/HomePage";
function App() {
  return (
    <div>
      <Router>
        
        <Switch>
          <Route exact path="/" component={Sign} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
