import ThInvCient from "./TableHead/thInvCient"
import Header from "../HeaderAdmin"
import ElementInvCient from "./Elements/elementInvCient"
import SearchBar from "./searchBar"
import { useState } from "react"
import 'animate.css';

function InvCient() {

  const [search, setsearch] = useState("")

  const propsi={
    id:1,nombre:"Name", apellidos:"Last", pt:3, tf:5, pi:6, tt:7, th:9}
 
    return (
      <>
        <div className="sticky-top"> 
          
          <Header />    
          <SearchBar 
            search={search}
            setsearch={setsearch}
          />  
          <ThInvCient />
          
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          <ElementInvCient 
            key={propsi.id} 
            {...propsi}
          />
            
        
      
        </div>
      </>
    )
  }
  
  export default InvCient