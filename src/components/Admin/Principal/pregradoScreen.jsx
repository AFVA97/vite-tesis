import Header from "../HeaderAdmin"
import ThPregrado from "./TableHead/thPregrado" 
import ElementFacultad from "./Elements/elementPregrado"
import SearchBar from "./searchBar"
import { useState } from "react"
import 'animate.css';

function Pregrado() {
  
  const [search, setsearch] = useState("")

  const propsi={
    id:1,nombre:"Name", apellidos:"Last", first:true, second:false, te:6, tm:7, th:9}
    return (
      <>
        <div className="sticky-top"> 
          
          <Header />       
          <SearchBar 
            search={search}
            setsearch={setsearch}
          />
          <ThPregrado />
          
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          <ElementFacultad 
            key={propsi.id} 
            {...propsi}
          />
            
        
      
        </div>
        
      </>
    )
  }
  
  export default Pregrado