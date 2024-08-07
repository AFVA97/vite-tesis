import { BrowserRouter, Route, Routes,useNavigate } from "react-router-dom"
import Header from "./Header_Fac"
import Inicio from "./Principal/inicioScreen"
import Login from "../login"
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";


export default function App() {
  const {user,loading,isAuthenticated}=useAuth();
  const navigate=useNavigate();
  useEffect(()=>{
    if(isAuthenticated){
      if(user.ciuser) 
        navigate('/teacher/inicio')
      else if(user.facuser)
        navigate('/faculty/inicio')
      else
      navigate('/admin/inicio') 
    }
  },[isAuthenticated])
  return (
    <>      
        <Header />
        <Routes>
          <Route exact path="/inicio" element={<Inicio/>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </>
  )
}
