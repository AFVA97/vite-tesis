import { BrowserRouter, Route, Routes,Navigate, useNavigate } from "react-router-dom"
import Header from "./HeaderAdmin"
import Inicio from "./Principal/inicioScreen"
import Facultad from "./Principal/facultadScreen"
import Pregrado from "./Principal/pregradoScreen"
import Posgrado from "./Principal/posgradoScreen"
import Investigacion from "./Principal/invCientScreen"
import Extension from "./Principal/extUnivScreen"
import InfoScreen  from "./Info/infoScreen"
import { useAuth } from "../../context/authContext"
import AddProfesor from "./Principal/AddProfesor"
import { useEffect, useState } from "react"
import AddFacultad from "./Principal/AddFacultad"
import Users from "./user/Users"
import AddUser from "./user/AddUser"
import InfoUSer from "./Info/InfoUSer"


export default function App() {
  const {user}=useAuth();

  const [username, setusername] = useState("UserName");
  
  useEffect(() => {
    if(user)
      setusername(user.username)
  }, [user]);
  

  return (
    <>
      
        
        <Routes>
          <Route path="/inicio" element={<Inicio username={username}/>}/>
          <Route path="/addprofesor" element={<AddProfesor/>}/>
          <Route path="/addprofesor/:_id" element={<AddProfesor/>}/>
          <Route path="/addfacultad" element={<AddFacultad/>}/>
          <Route path="/addfacultad/:_id" element={<AddFacultad/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/info/:_id" element={<InfoUSer/>}/>
          
          <Route path="/users/add" element={<AddUser/>}/>
          <Route path="/users/add/:_id" element={<AddUser/>}/>

          <Route path="/facultad" element={<Facultad username={username}/>} />
          <Route path="/pregrado" element={<Pregrado username={username}/>} />
          <Route path="/posgrado" element={<Posgrado username={username}/>} />
          <Route path="/inv_cient" element={<Investigacion username={username}/>} />
          <Route path="/ext_univ" element={<Extension username={username}/>} />          
          <Route path="/inicio/info/:_id" element={<InfoScreen title={"General"}/>} />
          <Route path="/facultad/info/:_id" element={<InfoScreen title={"Facultad"}/>} />
          <Route path="/pregrado/info/:_id" element={<InfoScreen title={"Pregrado"}/>} />
          <Route path="/posgrado/info/:_id" element={<InfoScreen title={"Posgrado"}/>} />
          <Route path="/inv_cient/info/:_id" element={<InfoScreen title={"Investigación Científica"}/>} />
          <Route path="/ext_univ/info/:_id" element={<InfoScreen title={"Extensión Universitaria"}/>} />
        </Routes>
      
    </>
  )
}
