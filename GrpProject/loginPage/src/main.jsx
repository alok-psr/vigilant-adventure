import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/home/home.jsx";
import LoginSignup from "./components/login/login.jsx";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      { path: "/login", element: <LoginSignup /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
