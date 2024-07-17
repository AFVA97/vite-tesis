import ThInicio from "./TableHead/thInicio"
import Header from "../HeaderAdmin"
import ElementInicio from "./Elements/elementInicio"
import SearchBar from "./searchBar"
import { useState } from "react"
import 'animate.css';

function inicio() {
  
  const [search, setsearch] = useState("")
 
  const propsi={
    id:1,nombre:"Name", apellidos:"Last", graduado:"graduado", hpre:5, hpos:6, hic:7, heu:8, th:9}
    
    
    
    return (
      <>
        <div className="sticky-top"> 
          
          <Header /> 
          <SearchBar 
            search={search}
            setsearch={setsearch}
          />      
          <ThInicio />
          
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          <ElementInicio 
            key={propsi.id} 
            {...propsi}
          />
            
        
      
        </div>
      </>
    )
  }
  
  export default inicio