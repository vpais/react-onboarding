import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TrendingMedia from "./views/trendingMedia";
import Root from "./views/root";
import Search, {loader as searchLoader} from "./views/search";

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
        element: <Search />,
        loader: searchLoader,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
