import { Link, NavLink } from "react-router-dom"

function Header() {
    
  return (
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
            
    <Link 
        className="navbar-brand" 
        to="/admin/inicio"
    >
        
            
            <img src="/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            Name
            
        
    </Link>

    <div className="navbar-collapse">
        <div className="navbar-nav">

            <NavLink 
                activeclassname="active"
                className="nav-item nav-link" 
                
                to="/admin/inicio"
            >
                Inicio
            </NavLink>

            <NavLink 
                activeclassname="active"
                className="nav-item nav-link" 
                
                to="/admin/facultad"
            >
                Facultades 
            </NavLink>
            
            <NavLink 
                activeclassname="active"
                className="nav-item nav-link" 
                
                to="/admin/pregrado"
            >
                Pregrado
            </NavLink>
            <NavLink 
                activeclassname="active"
                className="nav-item nav-link" 
                
                to="/admin/posgrado"
            >
                Posgrado
            </NavLink>
            <NavLink 
                activeclassname="active"
                className="nav-item nav-link" 
                
                to="/admin/inv_cient"
            >
                Investigaciones Científicas
            </NavLink>
            <NavLink 
                activeclassname="active"
                className="nav-item nav-link" 
                
                to="/admin/ext_univ"
            >
                Extensión Universitaria
            </NavLink>
        </div>
    </div>

    <ul className="navbar-nav ml-auto">
        <NavLink 
            activeclassname="active"
            className="nav-item nav-link" 
            
            to="/login"
        >
            Logout
        </NavLink>
    </ul>
    
</nav>
  )
}
export default Header
