import ThPregrado from '../Principal/TableHead/thPregrado'
import ElementPregrado from '../Principal/Elements/elementPregrado'
import {useAsignatura} from '../../../context/asignaturaContext'
import { useAuth } from "../../../context/authContext"
import { useEffect, useState } from "react"




const PregradoLayout = () => {
  const{getProfile}=useAuth()
  const user=getProfile()
    const {getAsignaturaProf,AsigProf}=useAsignatura()
  const [asignaturas, setasignaturas] = useState([]);
  useEffect(() => {
    if(user){
      getAsignaturaProf(user.ciuser)
      let pregr=[]

      //semestre nombre carrera facultad tipode curso horas
      if(Array.isArray(AsigProf)){
        AsigProf.map((pre)=>{
          pregr.push({_id:pre._id,nombre:pre.nombre,semestre:pre.semestre,carrera:pre.carrera,facultad:pre.facultad,tipocurso:pre.tipocurso,horas:pre.horas})
        })
    }
    setasignaturas(pregr)

  }

  }, [])


  return (
    <>
      <div className="sticky-top">        
        <ThPregrado/>
        </div>

      <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {asignaturas.map((pregrado,i)=>(
            <ElementPregrado 
            key={pregrado._id} 
            {...pos}
          />
          ))}
            {(asignaturas.length==0) &&
                <>
                <h6>No tiene Asignaturas asignadas </h6>
                </>}
        
      
        </div>
    </>
  )
}

export default PregradoLayout
