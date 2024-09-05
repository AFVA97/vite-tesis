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
import InfoInv from "./Info/InfoInv"
import InfoPre from "./Info/InfoPre"
import Gestion from "./Gestion"


export default function App() {
  
  
  const {user,getProfile}=useAuth();
  const [usuario,setusuario]=useState({_id:"",usename:""})

  useEffect(() => {
    const load=async()=>{
      getProfile()
    };load();
  }, [])
  

  useEffect(() => {
    if(user){
      setusuario(user)
    }
  }, [user]);
  
  return (
    <>
      <div className="pb-5  full-height bg-color" >
        <Routes>
          <Route exact path="/" element={<Inicio user={usuario}/>}/>
          <Route path="/addext_univ" element={<AddExtUniv />}/>
          <Route path="/addext_univ/:_id" element={<AddExtUniv />}/>
          <Route path="/addinv_cient" element={<AddInvCient />}/>
          <Route path="/addinv_cient/:_id" element={<AddInvCient />}/>
          <Route path="/addposgrado" element={<AddPosgrado />}/>
          <Route path="/addposgrado/:_id" element={<AddPosgrado />}/>
          <Route path="/infoinv/:_id" element={<InfoInv />}/>
          <Route path="/infopre/:_id" element={<InfoPre/>}/>
          <Route path="/inicio" element={<Inicio user={usuario}/>}/>
          <Route path="/pregrado" element={<Pregrado  user={usuario}/>} />
          <Route path="/posgrado" element={<Posgrado user={usuario}/>} />
          <Route path="/inv_cient" element={<Investigacion user={usuario}/>} />
          <Route path="/ext_univ" element={<Extension user={usuario}/>} />
          <Route path="/gestion" element={<Gestion user={usuario}/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
    </>
  )
}
