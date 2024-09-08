//import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function infoInicio({title,link}) {
    
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
          <button 
            type="button" 
            className="btn btn-link ml-3"
          >
            <Link 
                  className="navbar-brand" 
                  to={`${(link?link:"/faculty/inicio")}`}
            >
              <img src="/untitled.svg" alt="Arrow Back" width="30" height="30" className="d-inline-block align-text-top"/>
            </Link>
          </button>
          <ul className="navbar-nav ml-auto text-white ">
            <li className="nav-item">
              <a className="nav-link text-white " href="#"> {title}</a>
            </li>  
            <li><img src="/logo.png" alt="Logo" width="30" height="24" className="d-inline-block "/></li>
          </ul>
        </nav>
      </>
    )
  }
  
  export default infoInicio

