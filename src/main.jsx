import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './views/Login/Login'
import Cadastro from './views/Cadastro/Cadastro'
import Home from './views/Home/Home'
import Product from './views/Product/Product'
import './index.scss'
import { itens } from './mock/productMock.jsx' 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/home",
    element: <Home data={itens}/>,
  },
  {
    path: "/product/:productid",
    element: <Product data={itens}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
