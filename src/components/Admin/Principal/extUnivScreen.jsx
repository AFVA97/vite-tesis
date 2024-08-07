import ThExtUniv from "./TableHead/thExtUniv"
import Header from "../HeaderAdmin"
import ElementExtUniv from "./Elements/elementExtUniv"
import SearchBar from "./searchBar"
import { useState } from "react"
import 'animate.css';

function ExtUniv({username}) {

  const [search, setsearch] = useState("")

  const propsi={
    id:1,nombre:"Name", apellidos:"Last", are:5, tch:6, ae:7, th:9}
 
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
          <ElementExtUniv 
            key={propsi.id} 
            {...propsi}
          />
            
        
      
        </div>
      </>
    )
  }
  
  export default ExtUniv