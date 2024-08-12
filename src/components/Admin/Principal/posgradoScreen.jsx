import ThInicio from "./TableHead/thPosgrado"
import Header from "../HeaderAdmin"
import ElementPosgrado from "./Elements/elementPosgrado"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { usePosgrado } from "../../../context/posgradoContext"
import { useProfesor } from "../../../context/profesorContext"

function inicio({username}) {

  const [search, setsearch] = useState("")
  const { Profesors, getProfesors } = useProfesor();
  
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
  const [posgradoProf, setposgradoProf] = useState([])

  useEffect(() => {
    getProfesors();
    let prof=[];
    Profesors.map((profesor)=>{
      let aux={
        _id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos,hi:0, hr:0, th:0
            }
      
      
      async function loadPosgrados() {
        setposgradoProf(getPosgradoProf(profesor._id))

      }loadPosgrados();
      if(Array.isArray(posgradoProf)){
        posgradoProf.map((posg)=>{
          if(posg.impartido)
            aux.hi+=posg.horas
          else
            aux.hr+=posg.horas
          
        })
      }
      aux.th+=aux.hi+aux.hr
      prof.push(aux)
      
      
    })
    setprofesorInicio(prof)
  }, []);

  // const propsi={
  //   id:1,nombre:"Name", apellidos:"Last", hi:5, hr:6, th:9}
 
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
            <ElementPosgrado 
            key={profesor._id} 
            {...profesor}
          />
          ))}
            
        
      
        </div>
      </>
    )
  }
  
  export default inicio