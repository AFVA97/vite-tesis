import { BrowserRouter, Route, Routes , useNavigate} from "react-router-dom"
import Header from "./Header_Teach"
import Inicio from "./Principal/inicioScreen"
import Pregrado from "./Principal/pregradoScreen"
import Posgrado from "./Principal/posgradoScreen"
import Investigacion from "./Principal/inv_cientScreen"
import Extension from "./Principal/ext_univScreen"
import Login from "../login"
import { useAuth } from "../../context/authContext"
import { useEffect, useState } from "react"
import AddExtUniv from "./Add/AddExtUniv"
import AddInvCient from "./Add/AddInvCient"
import AddPosgrado from "./Add/AddPosgrado"


export default function App() {
  
  // useEffect(()=>{
  //   if(isAuthenticated){
  //     if(user.ciuser) 
  //       navigate('/teacher/inicio')
  //     else if(user.facuser)
  //       navigate('/faculty/inicio')
  //     else
  //     navigate('/admin/inicio') 
  //   }
  // },[isAuthenticated])
  
  
  
  return (
    <>
      
        <Routes>
          <Route exact path="/" element={<Inicio />}/>
          <Route path="/addext_univ" element={<AddExtUniv />}/>
          <Route path="/addext_univ/:_id" element={<AddExtUniv />}/>
          <Route path="/addinv_cient" element={<AddInvCient />}/>
          <Route path="/addinv_cient/:_id" element={<AddInvCient />}/>
          <Route path="/addposgrado" element={<AddPosgrado />}/>
          <Route path="/addposgrado/:_id" element={<AddPosgrado />}/>
          
          <Route path="/inicio" element={<Inicio />}/>
          <Route path="/pregrado" element={<Pregrado  />} />
          <Route path="/posgrado" element={<Posgrado />} />
          <Route path="/inv_cient" element={<Investigacion />} />
          <Route path="/ext_univ" element={<Extension />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </>
  )
}
