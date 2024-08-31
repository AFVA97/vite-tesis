import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../../context/authContext"

function Header({username}) {
    const {logout}=useAuth()
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
        <ul className="navbar-nav ml-auto text-white"
            onClick={()=>logout()}
        >
            
                Logout
            
        </ul>
    
    </div>

    
</nav>
  )
}
export default Header
