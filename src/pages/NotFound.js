import React from "react";
import Sad from "../components/layout/tenor.gif";
export default function NotFound() {
  return (
    <div className="container1 ">
      <img src={Sad} alt="sad" />

      <h1>Not Found</h1>
      <p className="lead">The page you are looking for does not exist...</p>
    </div>
  );
}
