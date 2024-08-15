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
import { useExtUniv } from "../../../context/extunivContext"

function inicio({username}) {
  
  const [search, setsearch] = useState("")
 
   
  const { Profesors, getProfesors } = useProfesor();
  const {
    Asignaturas,
    errors,
    AsigProf,
    getAsignaturas,
    deletesAsignatura,
    createsAsignatura,
    getAsignatura,
    getAsignaturaFac,
    getAsignaturaProf,
    updatesAsignatura,
  }=useAsignatura()
  const{
    ExtUnivs,
    errors:errorsExt,
    ExtProf,
    getExtUnivs,
    deletesExtUniv,
    createsExtUniv,
    getExtUniv,
    getExtUnivProf,
    updatesExtUniv,
  }=useExtUniv()
  const {
    Posgrados,
    PosProf,
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
        getAsignaturaProf(profesor._id)

      }loadAsignaturas();
      if(Array.isArray(AsigProf))
      {
        AsigProf.map((asig)=>{
          aux.hpre+=parseInt(asig.horas)
        })
      }
      async function loadPosgrados() {
        let res=getPosgradoProf(profesor._id)
        console.log(res);
        

      }loadPosgrados();
      if(Array.isArray(PosProf)){
        PosProf.map((posg)=>{
          aux.hpos+=parseInt(posg.horas)
        })
      }
      let res=null
      async function loadExtUniv() {
        res=getExtUnivProf(profesor._id)     
        
      }loadExtUniv()
      console.log(ExtProf);
      console.log(res);
      
      if(Array.isArray(ExtProf)){
        ExtProf.map((extension)=>{
          aux.heu+=parseInt(extension.horas)
        })
      }
      
      aux.th=parseInt(aux.hpre)+ parseInt(aux.hpos)+ parseInt(aux.hic)+ parseInt(aux.heu)
      
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
            profesorInicio={profesorInicio}
            setprofesorInicio={setprofesorInicio}
            {...profesor}
          />
            
          ))
            
          }
        
      
        </div>
        <Link 
                to="/admin/addprofesor"
            ><button className="floatingbutton btn btn-primary"
            >Agregar</button></Link>
          
        
      </>
    )
  }
  
  export default inicio