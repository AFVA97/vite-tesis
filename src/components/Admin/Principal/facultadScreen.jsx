import Header from "../HeaderAdmin"
import ThFacultad from "./TableHead/thFacultad" 
import ElementFacultad from "./Elements/elementFacultad"
import SearchBar from "./searchBar"
import { useState } from "react"
import 'animate.css';

function Facultad({username}) {

  const [search, setsearch] = useState("")

  const propsi={
    facultad: "nombre facultad", ca:2, cg:3, cef:4, th:5}
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
          <ElementFacultad 
            key={propsi.facultad} 
            {...propsi}
          />
            
        
      
        </div>
        
      </>
    )
  }
  
  export default Facultad