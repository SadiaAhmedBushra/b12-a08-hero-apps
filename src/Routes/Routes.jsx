import { createBrowserRouter } from "react-router";
import Apps from "../pages/Apps";
import Home from "../pages/home";
import MainLayout from "../Layouts/MainLayout";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        // path: "/home",
    element: <Home />,
      },
    {
    path: "/apps",
    element: <Apps />,
  },
{
    path: "/installation",
    element: <Installation />,
  },]
  },
    // {
    //     path: "*",
    //     element: <ErrorPage/>,
    // }
]);

export default router;