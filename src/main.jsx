import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Product from './views/Product/Product'
import './index.css'
import { itens } from './mock/productMock.jsx' 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home data={itens}/>,
  },
  {
    path: "/product/:productid",
    element: <Product />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
