import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Blogs from "../Pages/Blogs";
import Profile from "../Pages/Profile";
import Root from "../Components/Root";
import ErrorPage from "../Pages/ErrorPage";
import ItemDetail from "../Pages/ItemDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Home></Home>,
      },
      {
        path: "/items/:id",
        element: <ItemDetail></ItemDetail>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;