import Header from "../HeaderAdmin"
import ThPregrado from "./TableHead/thPregrado" 
import ElementFacultad from "./Elements/elementPregrado"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useProfesor } from "../../../context/profesorContext"
import { useAsignatura } from "../../../context/asignaturaContext"

function Pregrado({username}) {
  
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

  const [profesorInicio,setprofesorInicio]=useState([])
  const [asignaturaProf, setasignaturaProf] = useState([])
  useEffect(() => {
    getProfesors
    let prof=[];
    Profesors.map((profesor)=>{
      
      let aux={
        _id:profesor._id,
        nombre:profesor.nombre, 
        apellidos:profesor.apellidos, 
        first:false, second:false, 
        te:(profesor.trabajoec+profesor.trabajoc+profesor.trabajod+profesor.tutoria), 
        tm:profesor.trabajometo, 
        th:0}
        
        async function loadAsignaturas() {
          setasignaturaProf(getAsignaturaProf(profesor._id))
  
        }loadAsignaturas()
        if(Array.isArray(asignaturaProf))
          {
            asignaturaProf.map((asig)=>{
              if(asig.semestre){
                aux.first=true;
              }
              else{
                aux.second=true
              }
              aux.th+=asig.horas
            })
          }
        aux.th+=aux.te+aux.tm;
        prof.push(aux)
    })
    setprofesorInicio(prof)
  }, [])
  

    return (
      <>
        <div className="sticky-top"> 
          
          <Header username={username}/>       
          <SearchBar 
            search={search}
            setsearch={setsearch}
          />
          <ThPregrado />
          
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {profesorInicio.map((profesor,i)=>(
            <ElementFacultad 
            key={profesor._id} 
            {...profesor}
          />
          ))}
            
        
      
        </div>
        
      </>
    )
  }
  
  export default Pregrado