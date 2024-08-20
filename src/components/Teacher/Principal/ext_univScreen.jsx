import Header from "../Header_Teach"
import { Link } from "react-router-dom"
import ExUnivLayout from "../layouts/ExUnivLayout"
import { useAuth } from "../../../context/authContext"


function ext_univ({user}) {
  // const{getProfile}=useAuth()
  // const user=getProfile()
  // // const { getExtUnivProf,ExtProf}=useExtUniv()
  // const{user}=useAuth()
  // const [extensiones, setextensiones] = useState([])
  // useEffect(() => {
      
  //   async function loadExt() {
  //     getExtUnivProf(user.ciuser)     
      
  //   }loadExt()
  //   let extenss=[]
  //   if(Array.isArray(ExtProf)){
  //     ExtProf.map((exten)=>{
        
  //       extenss.push({_id:exten._id,titulo:exten.titulo,tipo:exten.tipo,horas:exten.horas,fecha:exten.fecha})
  //     })
  //   }
  //   setextensiones(extenss)
  // }, [])
  
//console.log(user);

    return (
      <>
      <div className="sticky-top"> 
          
          <Header username={user.username}/>      
          
          
        </div>
          <ExUnivLayout user={user}/>
        
          <Link  to="/teacher/addext_univ">          
          <button className="floatingbutton btn btn-primary"
              >Agregar</button></Link>
      </>
    )
  }
  
  export default ext_univ