import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// 부트스트랩 설정
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
