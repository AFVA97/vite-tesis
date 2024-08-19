import Header from "../HeaderAdmin"
import ThPregrado from "./TableHead/thPregrado" 
import ElementPregrado from "./Elements/elementPregrado"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useProfesor } from "../../../context/profesorContext"
import { useAsignatura } from "../../../context/asignaturaContext"

function Pregrado({username}) {
  
  const [search, setsearch] = useState("")

  const { Profesores,
    errors:errorProfesor,   
    getProfesores,
    createsProfesor,
    updatesProfesor,
    deletesProfesor, } = useProfesor();
  const {
    Asignaturas,
    errors:errorAsignatura,        
    getAsignaturas,
    createsAsignatura,
    updatesAsignatura,
    deletesAsignatura,
  }=useAsignatura()

  const [profesorInicio,setprofesorInicio]=useState([])
  useEffect(() => {

    const load=async()=>{
      await getProfesores();
      await getAsignaturas();
    };load()
    // getProfesors
    // let prof=[];
    // Profesors.map((profesor)=>{
      
    //   let aux={
    //     _id:profesor._id,
    //     nombre:profesor.nombre, 
    //     apellidos:profesor.apellidos, 
    //     first:false, second:false, 
    //     te:(profesor.trabajoec+profesor.trabajoc+profesor.trabajod+profesor.tutoria), 
    //     tm:profesor.trabajometo, 
    //     th:0}
        
    //     async function loadAsignaturas() {
    //       setasignaturaProf(getAsignaturaProf(profesor._id))
  
    //     }loadAsignaturas()
    //     if(Array.isArray(asignaturaProf))
    //       {
    //         asignaturaProf.map((asig)=>{
    //           if(asig.semestre){
    //             aux.first=true;
    //           }
    //           else{
    //             aux.second=true
    //           }
    //           aux.th+=asig.horas
    //         })
    //       }
    //     aux.th+=aux.te+aux.tm;
    //     prof.push(aux)
    // })
    // setprofesorInicio(prof)
  }, [])
  useEffect(() => {
    let profesoresArray=[]
    
    if(Array.isArray(Profesores)){
      Profesores.map((profesor)=>{
        let aux={
          _id:profesor._id,
          nombre:profesor.nombre, 
          apellidos:profesor.apellidos, 
          first:false, second:false, 
          te:(parseInt(profesor.trabajoec)+parseInt(profesor.trabajoc)+parseInt(profesor.trabajod)+parseInt(profesor.tutoria)), 
          tm:profesor.trabajometo, 
          th:0
        }
            
        if(Array.isArray(Asignaturas)){
          let asignaturasProf=Asignaturas.filter((asignatura)=>asignatura.profesor===profesor._id)
          asignaturasProf.map((asignatura)=>{
            if(asignatura.semestre){
              aux.first=true;
            }
            else{
              aux.second=true
            }
            aux.th+=parseInt(asignatura.horas)
          })
        }
        aux.th+=parseInt(aux.te)+parseInt(aux.tm)
        
        
        profesoresArray.push(aux)
      })
    }
    
    setprofesorInicio(profesoresArray)
  }, [Profesores,Asignaturas])
  
  

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
            <ElementPregrado 
            key={profesor._id} 
            profesorInicio={profesorInicio}
            setprofesorInicio={setprofesorInicio}
            
            {...profesor}
          />
          ))}
            
        
      
        </div>
        
      </>
    )
  }
  
  export default Pregrado