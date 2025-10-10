import { createBrowserRouter } from "react-router";
import Apps from "../pages/Apps";
import Home from "../pages/home";
import MainLayout from "../Layouts/MainLayout";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";
import AppDetails from "../pages/AppDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <div>Loading...</div>,
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
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
      },
    ],
  },
  // {
  //     path: "*",
  //     element: <ErrorPage/>,
  // }
]);

export default router;
