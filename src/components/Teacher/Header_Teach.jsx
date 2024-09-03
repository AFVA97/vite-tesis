import { Link, NavLink } from "react-router-dom"
import UserAccount from "./userAccount"

function Header({username,_id}) {

    
  return (
    
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link 
            className="navbar-brand ml-3" 
            to="/teacher/inicio"
        >
            <img src="/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            {username}
        </Link>
        <div className="navbar-collapse">
            <div className="navbar-nav">
                <NavLink 
                    activeclassname="active"
                    className="nav-item nav-link" 
                    to="/teacher/inicio"
                >
                    Inicio
                </NavLink>
                <NavLink 
                    activeclassname="active"
                    className="nav-item nav-link" 
                    to="/teacher/pregrado"
                >
                    Pregrado
                </NavLink>
                <NavLink 
                    activeclassname="active"
                    className="nav-item nav-link" 
                    to="/teacher/posgrado"
                >
                    Posgrado
                </NavLink>
                <NavLink 
                    activeclassname="active"
                    className="nav-item nav-link" 
                    to="/teacher/inv_cient"
                >
                    Investigaciones Científicas
                </NavLink>
                <NavLink 
                    activeclassname="active"
                    className="nav-item nav-link" 
                    to="/teacher/ext_univ"
                >
                    Extensión Universitaria
                </NavLink>
            </div>
        </div>
        <ul className="navbar-nav ml-auto">
            <UserAccount _id={_id}/>
        </ul>
    </nav>
  )
}
export default Header
