import { Link, NavLink, useNavigate } from "react-router-dom"
import UserAccount from './userAccount'

function Header({username}) {
    
  return (
    <>
        <nav className="navbar conatainer navbar-expand-sm navbar-dark bg-dark ">
            <Link 
                className="navbar-brand" 
                to="/admin/inicio"
            >
                    <img src="/logo.png" alt="Logo" width="30" height="24" className="d-inline-block ml-5 align-text-top"/>
                    {username}
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
                <UserAccount/>
            </ul>
        </nav>
    </>
  )
}
export default Header
