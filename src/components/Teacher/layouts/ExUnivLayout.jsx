import ThExtUniv from '../Principal/TableHead/thExtUniv'
import ElementExtUniv from '../Principal/Elements/elementExtUniv'
import { useExtUniv } from "../../../context/extunivContext"
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function ExUnivLayout() {

    const { getExtUnivProf,ExtProf}=useExtUniv()
    const{user}=useAuth()
    const [extensiones, setextensiones] = useState([])
    useEffect(() => {
        
      if(user)
        getExtUnivProf(user.ciuser)     
        
      
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
