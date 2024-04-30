import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Page/Home";
import Login from "../../Page/Login";
import Register from "../../Page/Register";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: ([
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ])
    },
  ]);

export default Router;