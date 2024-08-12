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


export default function App() {
  const {user,loading,isAuthenticated}=useAuth();
  const navigate=useNavigate();
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
  
  const [username, setusername] = useState("UserName");
  
  useEffect(() => {
    if(user)
      setusername(user.username)
  }, [user]);
  return (
    <>
      
        <Header username={username}/>
        <Routes>
          <Route exact path="/" element={<Inicio username={username}/>}/>
          <Route path="/inicio" element={<Inicio username={username}/>}/>
          <Route path="/pregrado" element={<Pregrado  username={username}/>} />
          <Route path="/posgrado" element={<Posgrado  username={username}/>} />
          <Route path="/inv_cient" element={<Investigacion  username={username}/>} />
          <Route path="/ext_univ" element={<Extension  username={username}/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </>
  )
}
