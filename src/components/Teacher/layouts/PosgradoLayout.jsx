import ThPosgrado from '../Principal/TableHead/thPosgrado'
import ElementPosgrado from '../Principal/Elements/elementPosgrado'
import {usePosgrado} from '../../../context/posgradoContext'
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react"


const PosgradoLayout = () => {

    const {getPosgradoProf,PosProf}=usePosgrado()
  const{user}=useAuth()
  const [posgrados, setposgrados] = useState([]);
  

  useEffect(() => {
    if(user){
      getPosgradoProf(user.ciuser);
    let posgr=[]
    if(Array.isArray(PosProf)){
      PosProf.map((pos)=>{
        posgr.push({_id:pos._id,nombre:pos.nombre,impartido:pos.impartido,modalidad:pos.modalidad,fecha:pos.fecha,horas:pos.horas})
      })
    }
    setposgrados(posgr)
    }



  }, [])


  return (
    <>
      <div className="sticky-top">        
        <ThPosgrado/>
        </div>

      <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {posgrados.map((pos,i)=>(
            <ElementPosgrado 
            key={pos._id} 
            {...pos}
          />
          ))}
            
        
      
        </div>
    </>
  )
}

export default PosgradoLayout
