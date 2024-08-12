import ThExtUniv from "./TableHead/thExtUniv"
import Header from "../HeaderAdmin"
import ElementExtUniv from "./Elements/elementExtUniv"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useProfesor } from "../../../context/profesorContext"
import { useExtUniv } from "../../../context/extunivContext"

function ExtUniv({username}) {

  const [search, setsearch] = useState("")

  const { Profesors, getProfesors } = useProfesor();
  const {ExtUnivs,
    errors,
    getExtUnivs,
    deletesExtUniv,
    createsExtUniv,
    getExtUniv,
    getExtUnivProf,
    updatesExtUniv,}=useExtUniv()

  const [profesores,setprofesores]=useState([])
  const [extensiones, setextensiones] = useState([])

  useEffect(() => {
    getProfesors();
    let profs=[];
    Profesors.map((profesor)=>{
      let aux={_id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos, are:0, tch:0, ae:0, th:0}
      async function loadExt() {
        setextensiones(getExtUnivProf(profesor._id))
      }loadExt()
      if(Array.isArray(extensiones)){
        extensiones.map((exten)=>{
          if(exten.tipo==="Atención a la Residencia"){aux.are+=exten.horas}
          else if(exten.tipo==="Trabajo Cátedras Honoríficas"){aux.tch+=exten.horas}
          else{aux.ae+=exten.horas}
        })
      }
      aux.th=aux.are+aux.tch+aux.ae;
      profs.push(aux)
    })
    setprofesores(profs)
  }, [])
  

  // const propsi={
  //   id:1,nombre:"Name", apellidos:"Last", are:5, tch:6, ae:7, th:9}
 
    return (
      <>
        <div className="sticky-top"> 
          
          <Header username={username}/>      
          <SearchBar 
            search={search}
            setsearch={setsearch}
          /> 
          <ThExtUniv />
          
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {profesores.map((profesor,i)=>(
            <ElementExtUniv 
            key={profesor._id} 
            {...profesor}
          />
          ))}
            
        
      
        </div>
      </>
    )
  }
  
  export default ExtUniv