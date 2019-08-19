// @flow

import "bootstrap/dist/css/bootstrap.css";
import "./theme/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import ru from "react-intl/locale-data/ru";

import App from "./components/App/App";

addLocaleData([...en, ...ru]);

const root = document.getElementById("root");

if (root) ReactDOM.render(<App />, root);
