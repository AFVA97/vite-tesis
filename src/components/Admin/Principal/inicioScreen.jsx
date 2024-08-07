import ThInicio from "./TableHead/thInicio"
import Header from "../HeaderAdmin"
import ElementInicio from "./Elements/elementInicio"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useProfesor } from "../../../context/profesorContext"
import { useNavigate ,Link} from "react-router-dom"

function inicio({username}) {
  
  const [search, setsearch] = useState("")
 
   
  const { Profesors, getProfesors } = useProfesor();

  useEffect(() => {
    getProfesors();
  }, []);

  
    return (
      <>
        <div className="sticky-top"> 
          
          <Header username={username}/> 
          <SearchBar 
            search={search}
            setsearch={setsearch}
          />      
          <ThInicio />
          
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {Profesors.map((profesor,i)=>(
            <ElementInicio 
            key={profesor._id} 
            {...profesor}
          />
            
          ))
            
          }
        
      
        </div>
        <Link 
                className="navbar-brand" 
                to="/admin/addprofesor"
            ><button className="floatingbutton btn btn-primary"
            >Agregar</button></Link>
          
        
      </>
    )
  }
  
  export default inicio