import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./routes/home.js";
import Brand from "./routes/brand.js";
import Model from "./routes/model.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals.js";


const router = createBrowserRouter([{ path: "/", element: <Home /> },{path: "/posts/:brandId", element: <Brand/>}, {path: "/posts/:brandId/:modelId", element: <Model/>}]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
