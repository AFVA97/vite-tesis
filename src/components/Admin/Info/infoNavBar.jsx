//import { useParams } from "react-router-dom"
import { Link, NavLink } from "react-router-dom"
import PropTypes from "prop-types"

function infoInicio({title}) {
    let text="Información";
    let link = "inicio";
      switch(title){
        case "Pregrado":
          link="pregrado";
          break;
        case "Facultad":
          link="facultad";
          break;
        case "Posgrado":
          link="posgrado";
          break;
        case "Investigación Científica":
          link="inv_cient";
          break;
        case "Extensión Universitaria":
          link="ext_univ";
          break;  
        case "Añadir Profesor":
          text="";
          link="inicio"
          break;
        case "Añadir Facultad":
          text="";
          link="facultad"
          break;
        case "Añadir Usuario":
          text="";
          link="users";
          break;
        default:
          text="";
          link="inicio";
          break;
      }
    
    // const params=useParams();
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
          <button 
            type="button" 
            className="btn btn-link"
          >
            <Link 
                  className="navbar-brand" 
                  to={`/admin/${link}`}
            >
              <img src="/untitled.svg" alt="Arrow Back" width="30" height="30" className="d-inline-block align-text-top"/>
            </Link>
          </button>

          <ul className="navbar-nav ml-auto text-white ">
            <li className="nav-item">
              <a className="nav-link text-white " href="#">{text} {title}</a>
            </li>   
            
            <li><img src="/logo.png" alt="Logo" width="30" height="24" className="d-inline-block "/></li>
            
          </ul>
          
        </nav>
        
      </>
    )
  }
  
  export default infoInicio

  infoInicio.propTypes={
    id:PropTypes.string
  }