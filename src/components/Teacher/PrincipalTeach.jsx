import { BrowserRouter, Route, Routes , useNavigate} from "react-router-dom"
import Header from "./Header_Teach"
import Inicio from "./Principal/inicioScreen"
import Facultad from "./Principal/facultadScreen"
import Pregrado from "./Principal/pregradoScreen"
import Posgrado from "./Principal/posgradoScreen"
import Investigacion from "./Principal/inv_cientScreen"
import Extension from "./Principal/ext_univScreen"
import Login from "../login"
import { useAuth } from "../../context/authContext"
import { useEffect } from "react"


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
          <Route exact path="/" element={<Inicio/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/facultad" element={<Facultad />} />
          <Route path="/pregrado" element={<Pregrado />} />
          <Route path="/posgrado" element={<Posgrado />} />
          <Route path="/inv_cient" element={<Investigacion />} />
          <Route path="/ext_univ" element={<Extension />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </>
  )
}
