import { useState } from "react"
import "../../App.css"
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import DescargarExcel from "../../Descarga/descarga";





function UserAccount() {
  const [showProfile, setShowProfile] = useState(false)
  const {logout}=useAuth();
  const navigate=useNavigate();
  
  function ProfileMenu() {
    return (
      <ul className=" profile-menu">
        <li ><DescargarExcel userType={2}/></li>
        <li onClick={()=>{logout()}}>Cerrar Sesión</li>
      </ul>
    )
  }
  return (
      

      <div className="profile">
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
      </div>
    
  )
}

export default UserAccount
