import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainNavigation from "./components/mainNavigation/MainNavigation.js";
import Home from "./routes/home.js";
import BrandPage from "./routes/brandPage.js";
import Model from "./routes/model.js";
import AddPost from "./routes/addPost.js";
import SignIn from "./routes/signIn.js";
import SignUp from "./routes/signUp.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals.js";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/posts/:brandId", element: <BrandPage /> },
  { path: "/posts/:brandId/:modelId", element: <Model /> },
  { path: "/posts/add", element: <AddPost /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainNavigation/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
