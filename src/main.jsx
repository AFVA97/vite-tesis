import React from 'react'
import ReactDOM from 'react-dom/client'

// import {
//   createBrowserRouter, RouterProvider
// } from "react-router-dom";
// import Login from "./components/login"
// import Admin from "./components/Admin/PrincipalAdmin"
// import Faculty from "./components/Faculty/PrincipalFac"
// import Teacher from "./components/Teacher/PrincipalTeach"
// import ErrorPage from './components/error-page';
import App from './App';




// const router = createBrowserRouter([
//   {
//       path: "/",
//       element: <Login />,
//       errorElement: <ErrorPage />,
      
//   },
//   {
//       path: "login",
//       element: <Login />,
//       errorElement: <ErrorPage />,
      
//   },
//   {
//       path: "admin/*",
//       element: <Admin />,
//       errorElement: <ErrorPage />,
      
//   },
//   {
//       path: "teacher/*",
//       element: <Teacher />,
//       errorElement: <ErrorPage />,
      
//   },
//   {
//       path: "faculty/*",
//       element: <Faculty />,
//       errorElement: <ErrorPage />,
      
//   },
// //RouterProvider router={router} 
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
