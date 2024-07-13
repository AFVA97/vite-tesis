import ThExtUniv from "./TableHead/thExtUniv"
import Header from "../HeaderAdmin"
import ElementExtUniv from "./Elements/elementExtUniv"

function ExtUniv() {
  const propsi={
    id:1,nombre:"Name", apellidos:"Last", graduado:"graduado", hpre:5, hpos:6, hic:7, heu:8, th:9}
 
    return (
      <>
        <div className="sticky-top"> 
          
          <Header />       
          <ThExtUniv />
          
        </div>
        <div className="container-fluid justify-content-center">
          <ElementExtUniv 
            key={propsi.id} 
            {...propsi}
          />
            
        
      
        </div>
      </>
    )
  }
  
  export default ExtUniv