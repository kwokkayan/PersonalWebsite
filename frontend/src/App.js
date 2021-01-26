import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import PrivateZone from "./components/PrivateZone";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={About} />
          <Route path="/private-zone" component={PrivateZone} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
