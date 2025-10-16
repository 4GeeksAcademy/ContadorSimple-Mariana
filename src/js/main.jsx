import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import "../styles/index.css";

let counter = 0;
const root = ReactDOM.createRoot(document.querySelector("#app"));


setInterval(() => {
  counter++;
  root.render(<Home seconds={counter} />);
}, 1000);
