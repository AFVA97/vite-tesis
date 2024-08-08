import { useState } from "react"
import "../../App.css"
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";




function UserAccount() {
  const [showProfile, setShowProfile] = useState(false)
  const {logout}=useAuth();
  const navigate=useNavigate();
  
  function ProfileMenu() {
    return (
      <ul className=" profile-menu">
        <li >Opcion 1</li>
        <li >Opcion 2</li>
        <li >Opcion 3</li>
        <li onClick={()=>{navigate("/admin/users")}}>Usuarios</li>
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
