import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../components/Login";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AddBlog from "../pages/AddBlog";
import AddAuthor from "../pages/AddAuthor";
import Test from "../pages/Test";
import CreateBlog from "../pages/CreateBlog";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: Login,
      },
      {
        path: "/admin",
        Component: Home,
        children: [
          {
            path: "",
            Component: Dashboard,
          },
          {
            path: "dashboard",
            Component: Dashboard,
          },
          {
            path: "addBlog",
            Component: AddBlog,
            children: [
              {
                path: "createBlog",
                Component: CreateBlog,
              },
            ],
          },
          {
            path: "addAuthor",
            Component: AddAuthor,
          },
        ],
      },
      {
        path: "/test",
        Component: Test,
      },
    ],
  },
]);
export default router;
