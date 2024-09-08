import { useState,useContext, useEffect } from "react"
import "../../App.css"
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { FechaContext } from "../../context/fechaContext";
import DescargarExcel from "../../Descarga/descarga";

function UserAccount() {
  const [showProfile, setShowProfile] = useState(false)
  const {logout}=useAuth();
  const navigate=useNavigate();
  const [second, setsecond] = useState(false)
  const {year, globalData,globalData1, setGlobalData, setGlobalData1,Cursos}=useContext(FechaContext)
  
  
  
  function ProfileMenu() {
    return (
      <ul  className="list-gorup profile-menu mt-1 ">
        <li ><DescargarExcel userType={0} _id={null} setShowProfile={setShowProfile}/></li>
        <li onClick={()=>setsecond(!second)} className={second?"bg-white text-black":""}>Período</li>
        <li onClick={()=>{navigate("/admin/gestion")}}>Cursos</li>
        <li onClick={()=>{navigate("/admin/users")}}>Usuarios</li>
        <li onClick={()=>{logout()}}>Cerrar Sesión</li>
      </ul>
    )
  }
  function ProfileMenu2() {
    return (
      <ul   className="list-group profile-menu2 mt-5 ">
        {Cursos.map((curso,index)=>(<li 
          className={
            (globalData==curso.comienzo && globalData1==curso.finaliza)
            ?"bg-white text-black ml-2"
            :" ml-2"} 
            key={index}
          onClick={()=>{
            setGlobalData(curso.comienzo);
            setGlobalData1(curso.finaliza);
            setsecond(false);
            setShowProfile(false);
            navigate('/');}}
          >{(new Date(curso.comienzo)).getFullYear()}-{(new Date(curso.finaliza)).getFullYear()}</li>))}
        
        
        <li 
          className={
            (parseInt(globalData)==0)
            ?"bg-white text-black ml-2"
            :" ml-2"} 
          onClick={()=>{
            setGlobalData(0);
            setGlobalData1(0);
            setsecond(false);            
            setShowProfile(false);
            navigate('/');}}
          >Toda la Información</li>
        
      </ul>
    )
  }
  return (
      <div className="profile ">
        <button
          onClick={() => {
            setShowProfile(!showProfile)
          }}
          className="btn btn-secondary"
        >
          <img 
            src="/user.svg" 
            alt="Logo" 
            width="30" 
            height="24" 
            className="d-inline-block align-text-top"
        />  
        </button>
        {showProfile ? <ProfileMenu /> : ""}
        {second?<ProfileMenu2/>:""}
      </div>
  )
}

export default UserAccount
