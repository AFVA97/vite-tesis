import ThInicio from "./TableHead/thInicio"
import Header from "../HeaderAdmin"
import ElementInicio from "./Elements/elementInicio"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useProfesor } from "../../../context/profesorContext"
import { useNavigate ,Link} from "react-router-dom"
import { useAsignatura } from "../../../context/asignaturaContext"
import { usePosgrado } from "../../../context/posgradoContext"

function inicio({username}) {
  
  const [search, setsearch] = useState("")
 
   
  const { Profesors, getProfesors } = useProfesor();
  const {
    Asignaturas,
    errors,
    getAsignaturas,
    deletesAsignatura,
    createsAsignatura,
    getAsignatura,
    getAsignaturaFac,
    getAsignaturaProf,
    updatesAsignatura,
  }=useAsignatura()
  const {
    Posgrados,
    errors:PosgradoErrors,
    getPosgrados,
    deletesPosgrado,
    createsPosgrado,
    getPosgrado,
    getPosgradoProf,
    updatesPosgrado,
  }=usePosgrado()
  const [profesorInicio,setprofesorInicio]=useState([])
  const [asignaturaProf, setasignaturaProf] = useState([])
  const [posgradoProf, setposgradoProf] = useState([])
  useEffect(() => {
    getProfesors();
    let prof=[];
    Profesors.map((profesor)=>{
      let aux={
        _id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos, graduado:profesor.graduado, hpre:0, hpos:0, hic:0, heu:0, th:0
      }
      async function loadAsignaturas() {
        setasignaturaProf(getAsignaturaProf(profesor._id))

      }loadAsignaturas();
      if(Array.isArray(asignaturaProf))
      {
        asignaturaProf.map((asig)=>{
          aux.hpre+=asig.horas
        })
      }
      async function loadPosgrados() {
        setposgradoProf(getPosgradoProf(profesor._id))

      }loadPosgrados();
      if(Array.isArray(posgradoProf)){
        posgradoProf.map((posg)=>{
          aux.hpos+=posg.horas
        })
      }
      aux.th=aux.hpre+ aux.hpos+ aux.hic+ aux.heu
      
      prof.push(aux)
      
      
    })
    setprofesorInicio(prof)
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
          {profesorInicio.map((profesor,i)=>(
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