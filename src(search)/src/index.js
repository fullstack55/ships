import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();
