import Header from "../HeaderAdmin"
import ThFacultad from "./TableHead/thFacultad" 
import ElementFacultad from "./Elements/elementFacultad"

function facultad() {
  const propsi={
    id:1,nombre:"Name", apellidos:"Last", graduado:"graduado", hpre:5, hpos:6, hic:7, heu:8, th:9}
    return (
      <>
        <div className="sticky-top"> 
          
          <Header />       
          <ThFacultad />
          
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
  
  export default facultad