import Header from "../Header_Teach"
import { Link } from "react-router-dom"
import InvCientLayout from "../layouts/InvCientLayout"


function inv_cient({user}) {
  
  

    return (
      <>
        <div className="sticky-top">
          <Header username={user.username} _id={user.ciuser}/>
        </div>
        <InvCientLayout user={user}/>
        <Link  to="/teacher/addinv_cient">          
        <button className="floatingbutton btn btn-success"
            >Agregar</button></Link>
      </>
    )
  }
  
  export default inv_cient