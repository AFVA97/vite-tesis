import { useAuth } from "../../../context/authContext"
import Header from "../Header_Teach"
import PregradoLayout from "../layouts/PregradoLayout"


function pregrado({user}) {
    return (
      <>
        <div className="sticky-top"> 
          
          <Header username={user.username} _id={user.ciuser}/>      
          
          
        </div>
        <PregradoLayout user={user}/>
        
        
        
      </>
    )
  }
  
  export default pregrado