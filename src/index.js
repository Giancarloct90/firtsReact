// LIBRARIES
import React from "react";
import ReactDom from "react-dom";

//STYLE
import "./styles/style.css";

// COMPONENTS
import App from "./components/App";
import App2 from "./components/App2";

ReactDom.render(
  <>
    <App />
    <App2 />
  </>,
  document.getElementById("root")
);
