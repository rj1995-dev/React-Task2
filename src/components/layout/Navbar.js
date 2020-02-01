import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({title}) => {
  return (
    <nav className="navbar nav-style mx-auto  bg-danger ">
      <h2 className="text-white ">
        <i className="fab fa-github p-1" />
        {(title = "Github User Finder")}
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
