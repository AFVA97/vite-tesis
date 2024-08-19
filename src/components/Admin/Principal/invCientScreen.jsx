import ThInvCient from "./TableHead/thInvCient"
import Header from "../HeaderAdmin"
import ElementInvCient from "./Elements/elementInvCient"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useInvCient } from "../../../context/invcientContext"
//import { set } from "react-hook-form"
import { useProfesor } from "../../../context/profesorContext"

function InvCient({username}) {

  const [search, setsearch] = useState("")
  const { Profesores,
    errors:errorProfesor,   
    getProfesores,
    createsProfesor,
    updatesProfesor,
    deletesProfesor, } = useProfesor();
  const {InvCients,
    errors:errorInvestigacion,        
    getInvCients,
    createsInvCient,
    updatesInvCient,
    deletesInvCient,}=useInvCient()
  const [profesores,setprofesores]=useState([])
  //const [investigaciones, setinvestigaciones] = useState([])
  
  useEffect(() => {
    const load=async () => {
      await getProfesores();
      await getInvCients()
    };load()
    // getProfesors();
    // let profs=[];
    // Profesors.map((profesor)=>{
    //   let aux={_id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos, proyecto:0, premios:0, publicaciones:0,otros:0}
    //   async function loadInv() {
    //     set(getInvCientProf(profesor._id))
    //   }loadInv()
    //   if(Array.isArray(investigaciones)){
    //     investigaciones.map((inves)=>{
    //       if(inves.tipo==="Proyecto"){aux.proyecto+=1}
    //       else if(inves.tipo==="Publicación Artículo"||inves.tipo==="Publicación Libro o Capítulo"){aux.publicaciones+=1}
    //       else if(inves.tipo==="Premio ACC"||inves.tipo==="Premio BTJ"||inves.tipo==="Otro Premio"){aux.premios+=1}
    //       else{aux.otros+=1}
    //     })
    //   }
    //   profs.push(aux)
    // })
    // setprofesores(profs)
  
  }, [])

  useEffect(()=>{
    let profesoresArray=[];
    if(Array.isArray(Profesores)){
      Profesores.map((profesor)=>{
        let aux={_id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos, proyecto:0, premios:0, publicaciones:0,otros:0}
        if(Array.isArray(InvCients)){
          let invcientProf=InvCients.filter((invcient)=>invcient.profesor===profesor._id)
          invcientProf.map((inves)=>{
                if(inves.tipo==="Proyecto"){aux.proyecto+=1}
                else if(inves.tipo==="Publicación Artículo"||inves.tipo==="Publicación Libro o Capítulo"){aux.publicaciones+=1}
                else if(inves.tipo==="Premio ACC"||inves.tipo==="Premio BTJ"||inves.tipo==="Otro Premio"){aux.premios+=1}
                else{aux.otros+=1}
              })
            }
            profesoresArray.push(aux)
      })
    }
    setprofesores(profesoresArray)
  },[Profesores,InvCients])

  // const propsi={
  //   id:1,nombre:"Name", apellidos:"Last", pt:3, tf:5, pi:6, tt:7, th:9}
 
    return (
      <>
        <div className="sticky-top"> 
          
          <Header username={username}/>    
          <SearchBar 
            search={search}
            setsearch={setsearch}
          />  
          <ThInvCient />
          
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {profesores.map((profesor,i)=>(
            <ElementInvCient 
            key={profesor._id} 
            {...profesor}
          />
          ))}
            
        
      
        </div>
      </>
    )
  }
  
  export default InvCient