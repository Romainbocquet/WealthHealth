import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/errorPage/ErrorPage";
import AddEmployees from "./pages/AddEmployees/AddEmployees";
import CurrentEmployees from "./pages/CurrentEmployees/CurrentEmployees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/add-employees",
        element: <AddEmployees />,
      },
      {
        path: "/view-employees",
        element: <CurrentEmployees />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);