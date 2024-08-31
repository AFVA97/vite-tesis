import { useState,useContext } from "react"
import "../../App.css"
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { FechaContext } from "../../context/fechaContext";

function UserAccount() {
  const [showProfile, setShowProfile] = useState(false)
  const {logout}=useAuth();
  const navigate=useNavigate();
  const [second, setsecond] = useState(false)
  const {year, globalData, setGlobalData}=useContext(FechaContext)
  
  function ProfileMenu() {
    return (
      <ul  className=" profile-menu mt-1">
        <li >Opcion 1</li>
        <li onClick={()=>setsecond(!second)} className={second?"bg-white text-black":""}>Período</li>
        <li onClick={()=>{navigate("/admin/gestion")}}>Gestionar</li>
        <li onClick={()=>{navigate("/admin/users")}}>Usuarios</li>
        <li onClick={()=>{logout()}}>Cerrar Sesión</li>
      </ul>
    )
  }
  function ProfileMenu2() {
    return (
      <ul   className=" profile-menu2 mt-1">
        <li 
          className={
            parseInt(year)==parseInt(globalData)
            ?"bg-white text-black"
            :""} 
          onClick={()=>{
            setGlobalData(year);
            setsecond(false);
            setShowProfile(false);
            navigate.push('/');}}
          >Este Curso</li>
        <li 
          className={
            parseInt(year)==(parseInt(globalData)+1)
            ?"bg-white text-black"
            :""} 
          onClick={()=>{
            setGlobalData(year-1);
            setsecond(false);
            setShowProfile(false);
            navigate.push('/');}} 
          >Curso Anterior</li>
        <li 
          className={
            (parseInt(year)!=parseInt(globalData) && parseInt(year)!=(parseInt(globalData)+1))
            ?"bg-white text-black"
            :""} 
          onClick={()=>{
            setGlobalData(0);
            setsecond(false);            
            setShowProfile(false);
            navigate.push('/');}}
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
