import Header from "../HeaderAdmin"
import ThFacultad from "./TableHead/thFacultad" 
import ElementFacultad from "./Elements/elementFacultad"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useFacultad } from "../../../context/facultadContext"
import { Link } from "react-router-dom"
import { useAsignatura } from "../../../context/asignaturaContext"

function Facultad({username}) {

  const [search, setsearch] = useState("")

  const {Facultades, getFacultads }=useFacultad()
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

  const [facelement, setfacelement] = useState([])
  const [asignaturaFac, setasignaturaFac] = useState([])
  
    
  useEffect(() => {
    getFacultads(); 
    let facul=[]
    Facultades.map((facultad)=>{
      let aux={
        _id:facultad._id,nombre:facultad.nombre,ca:0, cg:0, cef:0, th:0
      }
      async function loadAsignaturas() {
        setasignaturaFac(getAsignaturaFac(facultad._id))

      }loadAsignaturas();
      if(Array.isArray(asignaturaFac)){
        asignaturaFac.map((asig)=>{
          aux.ca+=1;
          aux.cg+=asig.cantgrupos
          if(asig.exafinal)
           aux.cef+=1
          aux.th+=asig.horas
          
        })
      }
      facul.push(aux)
      
    })
    setfacelement(facul)
  }, [])
  
  
  
  
  
  
    return (
      <>
        <div className="sticky-top"> 
          
          <Header username={username}/>       
          <SearchBar 
            search={search}
            setsearch={setsearch}
          />
          <ThFacultad />
          
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {facelement.map((facultad,i)=>(
            <ElementFacultad 
            key={facultad._id} 
            {...facultad}
          />
          ))}
            
        
      
        </div>
        <Link 
                className="navbar-brand" 
                to="/admin/addfacultad"
            ><button className="floatingbutton btn btn-primary"
            >Agregar</button></Link>
      </>
    )
  }
  
  export default Facultad