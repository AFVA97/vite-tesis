import Header from "../Header_Teach"
import { Link } from "react-router-dom"
import ExUnivLayout from "../layouts/ExUnivLayout"
import { useAuth } from "../../../context/authContext"


function ext_univ({user}) {
  

    return (
      <>
        <div className="sticky-top"> 
          <Header username={user.username} _id={user.ciuser}/>  
        </div>
          <ExUnivLayout user={user}/>
          <Link  to="/teacher/addext_univ">          
          <button className="floatingbutton btn btn-success"
              >Agregar</button></Link>
      </>
    )
  }
  
  export default ext_univ