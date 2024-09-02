import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../../context/authContext"
import UserAccount from "./userAccount"

function Header({username,_id}) {
    
  return (
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
    <Link 
        className="navbar-brand ml-3" 
        to="/faculty/inicio"
    >
        
        
            <img src="/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            {username}
        
    
    </Link>

    <div className="navbar-collapse">
        <div className="navbar-nav">

            <NavLink 
                activeclassname="active"
                className="nav-item nav-link" 
                
                to="/faculty/inicio"
            >
                Inicio
            </NavLink>

            
        </div>
        <ul className="navbar-nav ml-auto">
            <UserAccount _id={_id}/>
        </ul>
    
    </div>

    
</nav>
  )
}
export default Header
