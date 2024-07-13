import Header from "../HeaderAdmin"
import ThPregrado from "./TableHead/thPregrado" 
import ElementFacultad from "./Elements/elementPregrado"

function Pregrado() {
  const propsi={
    id:1,nombre:"Name", apellidos:"Last", graduado:"graduado", hpre:5, hpos:6, hic:7, heu:8, th:9}
    return (
      <>
        <div className="sticky-top"> 
          
          <Header />       
          <ThPregrado />
          
        </div>
        <div className="container-fluid justify-content-center">
          <ElementFacultad 
            key={propsi.id} 
            {...propsi}
          />
            
        
      
        </div>
        
      </>
    )
  }
  
  export default Pregrado