import ThExtUniv from '../Principal/TableHead/thExtUniv'
import ElementExtUniv from '../Principal/Elements/elementExtUniv'
import { useExtUniv } from "../../../context/extunivContext"
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function ExUnivLayout() {

    const { getExtUnivProf,ExtProf}=useExtUniv()
    const{getProfile    }=useAuth()
    const [user, setuser] = useState(null)
    const [extensiones, setextensiones] = useState([])
    useEffect(() => {
        async function loadProfile(){
          setuser( getProfile())
          
          
        }loadProfile()
        async function loadExt() {
          await getExtUnivProf(user.ciuser) 
        }loadExt()
           
        console.log(ExtProf);
        
      
      let extenss=[]
      if(Array.isArray(ExtProf)){
        ExtProf.map((exten)=>{
          
          extenss.push({_id:exten._id,titulo:exten.titulo,tipo:exten.tipo,horas:exten.horas,fecha:exten.fecha})
        })
      }
      setextensiones(extenss)
    }, [])
    
  
      return (
        <>
        <div className="sticky-top"> 
            
            
            <ThExtUniv />
            
          </div>
          <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
            {extensiones.map((extens,i)=>(
              <ElementExtUniv 
              key={extens._id} 
              {...extens}
            />
            ))}
              
          
        
          </div>
          
        </>
      )
    }

export default ExUnivLayout
