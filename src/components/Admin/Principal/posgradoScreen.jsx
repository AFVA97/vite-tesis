import ThInicio from "./TableHead/thPosgrado"
import Header from "../HeaderAdmin"
import ElementPosgrado from "./Elements/elementPosgrado"
import SearchBar from "./searchBar"
import { useState } from "react"
import 'animate.css';

function inicio({username}) {

  const [search, setsearch] = useState("")

  const propsi={
    id:1,nombre:"Name", apellidos:"Last", hi:5, hr:6, th:9}
 
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
          <ElementPosgrado 
            key={propsi.id} 
            {...propsi}
          />
            
        
      
        </div>
      </>
    )
  }
  
  export default inicio