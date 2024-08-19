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
  const { Profesores,
    errors:errorProfesor,   
    getProfesores,
    createsProfesor,
    updatesProfesor,
    deletesProfesor, } = useProfesor();
  const {
    Posgrados,
    errors:errorPosgrado,
    getPosgrados,
    createsPosgrado,
    updatesPosgrado,
    deletesPosgrado,
  }=usePosgrado()
  const [profesorInicio,setprofesorInicio]=useState([])
  //const [posgradoProf, setposgradoProf] = useState([])

  useEffect(() => {

    const load=async () => {
      await getProfesores();
      await getPosgrados();
    };load()

    //     if(posg.impartido)
    //         aux.hi+=posg.horas
    //       else
    //         aux.hr+=posg.horas
          
    //     })
    //   }
    //   aux.th+=aux.hi+aux.hr
    //   prof.pugetProfesors();
    // let prof=[];
    // Profesors.map((profesor)=>{
    //   let aux={
    //     _id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos,hi:0, hr:0, th:0
    //         }
      
      
    //   async function loadPosgrados() {
    //     setposgradoProf(getPosgradoProf(profesor._id))

    //   }loadPosgrados();
    //   if(Array.isArray(posgradoProf)){
    //     posgradoProf.map((posg)=>{
    //   sh(aux)
      
      
    // })
    // setprofesorInicio(prof)
  }, []);

  useEffect(() => {
    let profesoresArray=[]
    
    if(Array.isArray(Profesores)){
      Profesores.map((profesor)=>{
        let aux={
          _id:profesor._id,
          nombre:profesor.nombre, 
          apellidos:profesor.apellidos, 
          hi:0,
          hr:0, 
          th:0
        }
            
        if(Array.isArray(Posgrados)){
          let posgradosProf=Posgrados.filter((posgrado)=>posgrado.profesor===profesor._id)
          posgradosProf.map((posgrado)=>{
            if(posgrado.impartido){
              aux.hi+=parseInt(posgrado.horas);
            }
            else{
              aux.hr+=parseInt(posgrado.horas);
            }
            
          })
        }
        aux.th+=parseInt(aux.hi)+parseInt(aux.hr)
        
        
        profesoresArray.push(aux)
      })
    }
    
    setprofesorInicio(profesoresArray)
  }, [Profesores,Posgrados])
  


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