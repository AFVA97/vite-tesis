import Header from "../HeaderAdmin"
import ThFacultad from "./TableHead/thFacultad" 
import ElementFacultad from "./Elements/elementFacultad"

function Facultad() {
  const propsi={
    facultad: "nombre facultad", ca:2, cg:3, cef:4, th:5}
    return (
      <>
        <div className="sticky-top"> 
          
          <Header />       
          <ThFacultad />
          
        </div>
        <div className="container-fluid justify-content-center">
          <ElementFacultad 
            key={propsi.facultad} 
            {...propsi}
          />
            
        
      
        </div>
        
      </>
    )
  }
  
  export default Facultad