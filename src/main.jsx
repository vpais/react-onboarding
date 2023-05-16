import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TrendingMedia from "./views/trendingMedia";
import Root from "./views/root";
import Details, {loader as detailsLoader} from "./views/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index:true,
        element: <TrendingMedia />,
      },
      {
        path: "/tv-shows/:tvShowId",
        element: <Details />,
        loader: detailsLoader
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
