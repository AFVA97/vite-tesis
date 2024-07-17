import { useState } from "react"
import "../../App.css"


function ProfileMenu() {
    return (
      <ul className=" profile-menu">
        <li >Opcion 1</li>
        <li >Opcion 2</li>
        <li >Opcion 3</li>
        <li >Opcion 4</li>
        <li >Cerrar Sesión</li>
      </ul>
    )
  }

function UserAccount() {
  const [showProfile, setShowProfile] = useState(false)
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
