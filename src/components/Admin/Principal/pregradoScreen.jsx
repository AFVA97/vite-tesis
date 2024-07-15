import Header from "../HeaderAdmin"
import ThPregrado from "./TableHead/thPregrado" 
import ElementFacultad from "./Elements/elementPregrado"

function Pregrado() {
  const propsi={
    id:1,nombre:"Name", apellidos:"Last", first:true, second:false, te:6, tm:7, th:9}
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