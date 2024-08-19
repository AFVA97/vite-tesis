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
import { useInvCient } from "../../../context/invcientContext"

function inicio({username}) {
  
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
  const{
    ExtUnivs,
    errors:errorExtension,
    getExtUnivs,
    createsExtUniv,
    updatesExtUniv,
    deletesExtUniv,
  }=useExtUniv()
  const {
    Posgrados,
    errors:errorPosgrado,
    getPosgrados,
    createsPosgrado,
    updatesPosgrado,
    deletesPosgrado,
  }=usePosgrado()
  const {InvCients,
    errors:errorInvestigacion,        
    getInvCients,
    createsInvCient,
    updatesInvCient,
    deletesInvCient,}=useInvCient()
  const [profesorInicio,setprofesorInicio]=useState([])
  //const [Profesor, setProfesor] = useState([])
  //const [asignaturaProf, setasignaturaProf] = useState([])
  //const [posgradoProf, setposgradoProf] = useState([])
  useEffect(() => {
    //getProfesors();
    const load=async () => {
      await getProfesores();
      await getAsignaturas();
      await getPosgrados();
      await getExtUnivs();
      await getInvCients()
    };load()
    
    // let prof=[];
    // Profesores.map((profesor)=>{
    //   let aux={
    //     _id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos, graduado:profesor.graduado, hpre:0, hpos:0, hic:0, heu:0, th:0
    //   }
    //   async function loadAsignaturas() {
    //     getAsignaturaProf(profesor._id)

    //   }loadAsignaturas();
    //   if(Array.isArray(AsigProf))
    //   {
    //     AsigProf.map((asig)=>{
    //       aux.hpre+=parseInt(asig.horas)
    //     })
    //   }
    //   async function loadPosgrados() {
    //     let res=getPosgradoProf(profesor._id)
    //     console.log(res);
        

    //   }loadPosgrados();
    //   if(Array.isArray(PosProf)){
    //     PosProf.map((posg)=>{
    //       aux.hpos+=parseInt(posg.horas)
    //     })
    //   }
    //   let res=null
    //   async function loadExtUniv() {
    //     res=getExtUnivProf(profesor._id)     
        
    //   }loadExtUniv()
    //   console.log(ExtProf);
    //   console.log(res);
      
    //   if(Array.isArray(ExtProf)){
    //     ExtProf.map((extension)=>{
    //       aux.heu+=parseInt(extension.horas)
    //     })
    //   }
      
    //   aux.th=parseInt(aux.hpre)+ parseInt(aux.hpos)+ parseInt(aux.hic)+ parseInt(aux.heu)
      
    //   prof.push(aux)
      
      
    // })
    //setprofesorInicio(prof)
  }, []);


  useEffect(() => {
    let profesoresArray=[]
    
    if(Array.isArray(Profesores)){
      Profesores.map((profesor)=>{
        let aux={
              _id:profesor._id,
              nombre:profesor.nombre, 
              apellidos:profesor.apellidos, 
              graduado:profesor.graduado, 
              hpre:0, 
              hpos:0, 
              hic:0, 
              heu:0, 
              th:0
            }
            
        if(Array.isArray(Asignaturas)){
          let asignaturasProf=Asignaturas.filter((asignatura)=>asignatura.profesor===profesor._id)
          asignaturasProf.map((asignatura)=>{
            aux.hpre+=parseInt(asignatura.horas);
          })
        }
        if(Array.isArray(Posgrados)){
          let posgradosProf=Posgrados.filter((posgrado)=>posgrado.profesor===profesor._id)
          posgradosProf.map((posgrado)=>{
            aux.hpos+=parseInt(posgrado.horas);
          })
        }
        if(Array.isArray(InvCients)){
          let invcientProf=InvCients.filter((invcient)=>invcient.profesor===profesor._id)
          invcientProf.map((invcient)=>{
            aux.hic+=1;
          })
        }
        if(Array.isArray(ExtUnivs)){
          let extensionProf=ExtUnivs.filter((extension)=>extension.profesor===profesor._id)
          extensionProf.map((extension)=>{
            aux.heu+=parseInt(extension.horas);
          })
        }
        aux.th=parseInt(aux.hpre)+ parseInt(aux.hpos)+ parseInt(aux.hic)+ parseInt(aux.heu)
        
        profesoresArray.push(aux)
      })
    }
    
    setprofesorInicio(profesoresArray)
    
    //console.log('✅ profesorInicio    ', profesorInicio)
    
    
  }, [Profesores,Asignaturas,Posgrados,ExtUnivs,InvCients])
  

  
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