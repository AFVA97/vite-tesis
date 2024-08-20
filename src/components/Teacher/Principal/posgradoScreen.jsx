import { useAuth } from "../../../context/authContext"
import Header from "../Header_Teach"
import PosgradoLayout from '../layouts/PosgradoLayout'
import { Link } from "react-router-dom" 


function posgrado({user}) {
  
    return (
      <>
        <div className="sticky-top"> 
          
          <Header username={user.username}/>      
          
          
        </div>
        <PosgradoLayout user={user}/>
        <Link  to="/teacher/addposgrado">          
          <button className="floatingbutton btn btn-primary"
              >Agregar</button></Link>
        
      </>
    )
  }
  
  export default posgrado