import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Add from "./views/Add";
import List from "./views/List";
import "./index.less";

export default function Blog(props) {
  return (
    <div>
      <p>Blog-Route</p>
      <ul>
        <li>
          <Link to="/blog/add">add</Link>
        </li>
        <li>
          <Link to="/blog/list">list</Link>
        </li>
      </ul>
    </div>
  );
}
