import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TvShow, { loader as tvshowLoader } from "./components/tvshow";


const router = createBrowserRouter([
  {
    path: "/",
    element: <TvShow />,
    loader: tvshowLoader,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
