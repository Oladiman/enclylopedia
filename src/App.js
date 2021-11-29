import { useState } from "react";
import Landing from "./pages/Landing";
import Details from "./pages/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [details, setDetails] = useState([]);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Landing setDetails={setDetails} />
        </Route>
        <Route exact path="/:id/details">
          <Details details={details} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
