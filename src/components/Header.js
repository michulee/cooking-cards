import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

import "styles/components/_header.scss";
import logo from "assets/logo.svg";
import {BiSearchAlt, BiDotsVerticalRounded} from "react-icons/bi";
import { render } from "@testing-library/react";

export default function Nav() {
  return (
    <nav>
      <div>
        <div className="container-img">
          <a href="/">
            <img className="logo" src={logo} />
          </a>
        </div>
        <SearchBar />
        <BiDotsVerticalRounded className="icon"/>
        <NavLink activeClassName="active" to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

function SearchBar() {
  return (
    <Fragment>
      <div className="search">
        <div className="container-img">
          <BiSearchAlt className="icon" />
          {/* <img className="icon" src={logo} /> */}
        </div>
      </div>
    </Fragment>
  );
}
