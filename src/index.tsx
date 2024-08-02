import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
=======
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
>>>>>>> 36ddd4f0da9227db4e699c3bc48677bc0325d87c
);
