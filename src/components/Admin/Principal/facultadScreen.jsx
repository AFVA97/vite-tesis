import Header from "../HeaderAdmin"
import ThFacultad from "./TableHead/thFacultad" 
import ElementFacultad from "./Elements/elementFacultad"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useFacultad } from "../../../context/facultadContext"
import { Link } from "react-router-dom"

function Facultad({username}) {

  const [search, setsearch] = useState("")

  const {Facultades, getFacultads }=useFacultad()

    
  useEffect(() => {
    getFacultads(); 
    
  }, [])
  
  
  
  
  
  
  // const propsi={
  //   facultad: "nombre facultad", ca:2, cg:3, cef:4, th:5}
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
          {Facultades.map((facultad,i)=>(
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