import Header from "../HeaderAdmin"
import ThPregrado from "./TableHead/thPregrado" 
import ElementPregrado from "./Elements/elementPregrado"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useProfesor } from "../../../context/profesorContext"
import { useAsignatura } from "../../../context/asignaturaContext"

function Pregrado({username}) {
  
  const { Profesores, getProfesores } = useProfesor();
  const { Asignaturas, getAsignaturas }=useAsignatura()
  const [profesorInicio,setprofesorInicio]=useState([])
  const [query, setQuery] = useState('');
  const [filteredProfesor, setFilteredProfesor] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredProfesor(
      profesorInicio.filter((profesor) =>
        profesor.nombre.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if(query==='')
      setFilteredProfesor(profesorInicio)
  }, [query])

  useEffect(() => {
    const load=async()=>{
      await getProfesores();
      await getAsignaturas();
    };load()    
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
    setFilteredProfesor(profesorInicio)
  }, [Profesores,Asignaturas])
  

    return (
      <>
        <div className="sticky-top"> 
          <Header username={username}/>       
          <SearchBar 
            query={query}
            handleInputChange={handleInputChange}
            setQuery={setQuery}
          />
          <ThPregrado />
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {filteredProfesor.map((profesor,i)=>(
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