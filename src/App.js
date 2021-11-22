import { useState } from "react";
// import { useQuery } from "react-query";

import Landing from "./pages/Landing";
import Details from "./pages/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [details, setDetails] = useState("");

  

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {" "}
          <Landing
            setDetails={setDetails}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Route>
        <Route exact path={`/:id/details`}>
          <Details details={details} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
