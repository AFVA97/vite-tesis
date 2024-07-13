import ThInicio from "./TableHead/thInicio"
import Header from "../HeaderAdmin"
import ElementInicio from "./Elements/elementInicio"

function inicio() {
  const propsi={
    id:1,nombre:"Name", apellidos:"Last", graduado:"graduado", hpre:5, hpos:6, hic:7, heu:8, th:9}
 
    return (
      <>
        <div className="sticky-top"> 
          
          <Header />       
          <ThInicio />
          
        </div>
        <div className="container-fluid justify-content-center">
          <ElementInicio 
            key={propsi.id} 
            {...propsi}
          />
            
        
      
        </div>
      </>
    )
  }
  
  export default inicio