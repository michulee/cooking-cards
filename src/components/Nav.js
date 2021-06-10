import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./Nav.scss";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import logo from "./logo.svg";
import { render } from "@testing-library/react";

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <nav>
            <ul>
              <li>
                <div className="container-img">
                  <img src={logo} />
                </div>
              </li>
              <li>
                  <SearchBar/>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </Router>
    );
  }
}

function SearchBar() {
    return (
        <Fragment>
            <div className="search">

            </div>
        </Fragment>
    );
}

export default Nav;
