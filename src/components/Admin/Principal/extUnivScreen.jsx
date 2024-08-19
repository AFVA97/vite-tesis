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

  const { Profesores,
    errors:errorProfesor,   
    getProfesores,
    createsProfesor,
    updatesProfesor,
    deletesProfesor, } = useProfesor();
  const{
    ExtUnivs,
    errors:errorExtension,
    getExtUnivs,
    createsExtUniv,
    updatesExtUniv,
    deletesExtUniv,
  }=useExtUniv()

  const [profesores,setprofesores]=useState([])
  const [extensiones, setextensiones] = useState([])

  useEffect(() => {
    const load=async () => {
      await getProfesores();
      await getExtUnivs();
      
    };load()
    
    // getProfesors();
    // let profs=[];
    // Profesors.map((profesor)=>{
    //   let aux={_id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos, are:0, tch:0, ae:0, th:0}
    //   async function loadExt() {
    //     setextensiones(getExtUnivProf(profesor._id))
    //   }loadExt()
    //   if(Array.isArray(extensiones)){
    //     extensiones.map((exten)=>{
    //       if(exten.tipo==="Atención a la Residencia"){aux.are+=exten.horas}
    //       else if(exten.tipo==="Trabajo Cátedras Honoríficas"){aux.tch+=exten.horas}
    //       else{aux.ae+=exten.horas}
    //     })
    //   }
    //   aux.th=aux.are+aux.tch+aux.ae;
    //   profs.push(aux)
    // })
    // setprofesores(profs)
  }, [])
  
  useEffect(()=>{
    let profesoresArray=[];
    if(Array.isArray(Profesores)){
      Profesores.map((profesor)=>{
        let aux={_id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos,  are:0, tch:0, ae:0, th:0}
        if(Array.isArray(ExtUnivs)){
          let extunivProf=ExtUnivs.filter((extension)=>extension.profesor===profesor._id)
          extunivProf.map((extension)=>{
            if(extension.tipo==="Atención a la Residencia"){
              aux.are+=parseInt(extension.horas)}
            else if(extension.tipo==="Trabajo Cátedras Honoríficas"){
              aux.tch+=parseInt(extension.horas)}
            else{aux.ae+=parseInt(extension.horas)}
              })
            }
            aux.th=parseInt(aux.are)+parseInt(aux.ae)+parseInt(aux.tch)
            profesoresArray.push(aux)
      })
    }
    setprofesores(profesoresArray)
  },[Profesores,ExtUnivs])

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