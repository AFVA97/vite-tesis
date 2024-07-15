import ThExtUniv from "./TableHead/thExtUniv"
import Header from "../HeaderAdmin"
import ElementExtUniv from "./Elements/elementExtUniv"

function ExtUniv() {
  const propsi={
    id:1,nombre:"Name", apellidos:"Last", are:5, tch:6, ae:7, th:9}
 
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