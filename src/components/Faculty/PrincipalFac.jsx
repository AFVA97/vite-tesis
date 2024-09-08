import { Route, Routes } from "react-router-dom"
import Inicio from "./Principal/inicioScreen"
import Login from "../login"
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import AddCarrera from "./Add_Carrera/AddCarrera";
import Modificar from "./Add_Carrera/Modificar";
import AddAsignatura from "./Asignaturas/AddAsignatura";
import Gestionar from "./Gestion/Gestionar";


export default function App() {
  const {user,getProfile}=useAuth();
  const [User, setUser] = useState("UserName");

  useEffect(() => {
    const load=async()=>{
      getProfile()
    };load();
  }, [])
  

  useEffect(() => {
    if(user)
      setUser(user)
  }, [user]);

  return (
    <>      
        <div className="pb-5 full-height bg-color">
        <Routes>
          <Route exact path="/inicio" element={<Inicio User={User}/>}/>
          <Route exact path="/gestion" element={<Gestionar />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/addcarrera" element={<AddCarrera User={User}/>}/>
          <Route path="/modificar/:_id" element={<Modificar User={User}/>}/>
          <Route path="/addasignatura/:_id" element={<AddAsignatura User={User}/>}/>
        </Routes>
        </div>
    </>
  )
}
