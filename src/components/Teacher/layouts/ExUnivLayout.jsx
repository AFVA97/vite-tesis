import ThExtUniv from '../Principal/TableHead/thExtUniv'
import ElementExtUniv from '../Principal/Elements/elementExtUniv'
import { useExtUniv } from "../../../context/extunivContext"
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function ExUnivLayout({user}) {

  const { getExtUnivs,ExtUnivs}=useExtUniv()    
  const [extensiones, setextensiones] = useState([])

  useEffect(() => {
    const load=async()=>{
      await getExtUnivs();
    };load();
  }, [])

  useEffect(() => {
    let extenss=[]
    if(Array.isArray(ExtUnivs)){
      let extProf=ExtUnivs.filter((exten)=>exten.profesor===user.ciuser)
      extProf.map((exten)=>{
        extenss.push({_id:exten._id,titulo:exten.titulo,tipo:exten.tipo,horas:exten.horas,fecha:exten.fecha})
      })
    }
    setextensiones(extenss)
  }, [ExtUnivs,user])
  
  

  return (
    <>
    <div className=""> 
        
        
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
