import Landing from "./pages/Landing";
import Details from "./pages/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
