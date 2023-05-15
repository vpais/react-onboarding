import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TrendingMedia from "./views/trendingMedia";
import Root from "./views/root";
import TvShows, {loader as tvShowLoader} from "./views/tvShows";

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
        path: "/tv-shows",
        element: <TvShows />,
        loader: tvShowLoader,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
