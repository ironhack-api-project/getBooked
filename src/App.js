import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import ticket from "./ticket.png";
import Results from "./components/Results";
//Ticketmaster API Key = biW1fGE1aeVKqhiGWAdGttCRSItyVN2z
function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <span className="ticket">
            <img src={ticket} width="50" alt="ticket" />
          </span>
        </Link>
        <h1>getBooked</h1>
      </header>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} show={true} />}
        />
        <Route exact path="/events/:eventId" component={Events} />
        <Route exact path="/results" component={Results} />
      </Switch>
      <br></br>
      <footer>
        <div className="footercontainer">
          Designed by{" "}
          <a href="https://github.com/brunobarbagelata" target="_blank">
            Bruno
          </a>
          ,{" "}
          <a href="https://github.com/darioformoso" target="_blank">
            Dario
          </a>{" "}
          and{" "}
          <a href="https://github.com/michaelporreca" target="_blank">
            Michael
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
export default App;
