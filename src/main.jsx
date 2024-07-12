import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import Login from "./components/login"
import Admin from "./components/Admin/PrincipalAdmin"
import Faculty from "./components/Faculty/PrincipalFac"
import Teacher from "./components/Teacher/PrincipalTeach"
import Inicio from "./components/Admin/Principal/inicioScreen"
import Facultad from "./components/Admin/Principal/facultadScreen"
import Pregrado from "./components/Admin/Principal/pregradoScreen"
import Posgrado from "./components/Admin/Principal/posgradoScreen"
import Investigacion from "./components/Admin/Principal/inv_cientScreen"
import Extension from "./components/Admin/Principal/ext_univScreen"
import ErrorPage from './components/error-page';
import InfoInicio from "./components/Admin/Principal/Info/infoNavBar"



const router = createBrowserRouter([
  {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
      
  },
  {
      path: "login",
      element: <Login />,
      errorElement: <ErrorPage />,
      
  },
  {
      path: "admin/*",
      element: <Admin />,
      errorElement: <ErrorPage />,
      
  },
  {
      path: "teacher/*",
      element: <Teacher />,
      errorElement: <ErrorPage />,
      
  },
  {
      path: "faculty/*",
      element: <Faculty />,
      errorElement: <ErrorPage />,
      
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
