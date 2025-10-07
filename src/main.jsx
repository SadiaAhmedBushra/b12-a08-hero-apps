import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { createBrowserRouter } from "react-router";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router";
import router from './Routes/Routes.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
