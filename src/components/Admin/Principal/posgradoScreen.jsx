import ThInicio from "./TableHead/thPosgrado"
import Header from "../HeaderAdmin"
import ElementPosgrado from "./Elements/elementPosgrado"

function inicio() {
  const propsi={
    id:1,nombre:"Name", apellidos:"Last", hi:5, hr:6, th:9}
 
    return (
      <>
        <div className="sticky-top"> 
          
          <Header />       
          <ThInicio />
          
        </div>
        <div className="container-fluid justify-content-center">
          <ElementPosgrado 
            key={propsi.id} 
            {...propsi}
          />
            
        
      
        </div>
      </>
    )
  }
  
  export default inicio