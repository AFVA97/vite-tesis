import ThPosgrado from '../Principal/TableHead/thPosgrado'
import ElementPosgrado from '../Principal/Elements/elementPosgrado'
import {usePosgrado} from '../../../context/posgradoContext'
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react"


const PosgradoLayout = ({user}) => {

  //   const {getPosgradoProf,PosProf}=usePosgrado()
  // const{user}=useAuth()
  // const [posgrados, setposgrados] = useState([]);
  
  const {Posgrados,
    errors,
    getPosgrados,
    getPosgrado,
    createsPosgrado,
    updatesPosgrado,
    deletesPosgrado,
    }=usePosgrado()
    const [posgrados, setposgrados] = useState([]);
  

  useEffect(() => {
    // if(user){
    //   getPosgradoProf(user.ciuser);
    // let posgr=[]
    // if(Array.isArray(PosProf)){
    //   PosProf.map((pos)=>{
    //     posgr.push({_id:pos._id,nombre:pos.nombre,impartido:pos.impartido,modalidad:pos.modalidad,fecha:pos.fecha,horas:pos.horas})
    //   })
    // }
    // setposgrados(posgr)
    // }
    const load=async()=>{
      await getPosgrados();
    };load();


  }, [])

  useEffect(() => {
    let posgr=[]

      //semestre nombre carrera facultad tipode curso horas
      if(Array.isArray(Posgrados)){
        let posProf=Posgrados.filter((posgrado)=>posgrado.profesor===user.ciuser)
          
        posProf.map((pos)=>{
          posgr.push({_id:pos._id,nombre:pos.nombre,impartido:pos.impartido,modalidad:pos.modalidad,fecha:pos.fecha,horas:pos.horas})
        })
      }
    setposgrados(posgr)
  }, [Posgrados,user])
  


  return (
    <>
      <div className="">        
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
