import ThInvCient from "./TableHead/thInvCient"
import Header from "../HeaderAdmin"
import ElementInvCient from "./Elements/elementInvCient"

function InvCient() {
  const propsi={
    id:1,nombre:"Name", apellidos:"Last", graduado:"graduado", hpre:5, hpos:6, hic:7, heu:8, th:9}
 
    return (
      <>
        <div className="sticky-top"> 
          
          <Header />       
          <ThInvCient />
          
        </div>
        <div className="container-fluid justify-content-center">
          <ElementInvCient 
            key={propsi.id} 
            {...propsi}
          />
            
        
      
        </div>
      </>
    )
  }
  
  export default InvCient