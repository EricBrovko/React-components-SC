// @flow

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import "bootstrap/dist/css/bootstrap.css";
import "./theme/index.css";

const root = document.getElementById("root");

if (root) ReactDOM.render(<App />, root);
