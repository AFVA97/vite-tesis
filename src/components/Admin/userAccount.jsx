import { useState } from "react"
import {  Link } from "react-router-dom"



function userAccount() {
    const [active, setactive] = useState(false)
    function onClick() {
        setactive(!active);
    }
    return(
        <>
            <div className="btn-group dropstart">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img 
                        src="/user.svg" 
                        alt="Logo" 
                        width="30" 
                        height="24" 
                        className="d-inline-block align-text-top"
                    />  
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Visualización</a></li>
                    <li><a className="dropdown-item" href="#">Reportes</a></li>
                    <li><a className="dropdown-item" href="#">Cambiar Contraseña</a></li>
                    <li><Link 
                        className="nav-item " 
                        
                        to="/login"
                        >
                        Cerrar Sesión
                        </Link>
                    </li>
                </ul>
            </div>



            
              
            
        </>
    )
}
export default userAccount