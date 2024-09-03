import ThPregrado from '../Principal/TableHead/thPregrado'
import ElementPregrado from '../Principal/Elements/elementPregrado'
import {useAsignatura} from '../../../context/asignaturaContext'
import { useEffect, useState } from "react"
import { useFacultad } from '../../../context/facultadContext'
import {useCarrera} from '../../../context/carreraContext'



const PregradoLayout = ({user}) => {
  
  const { Asignaturas, getAsignaturas }=useAsignatura()
  const [asignaturas, setasignaturas] = useState([]);
  const {Facultades,getFacultades}=useFacultad()
  const {Carreras,getCarreras}=useCarrera();

  useEffect(() => {
    const load=async()=>{
      await getAsignaturas();
      await getFacultades();
      await getCarreras();
    };load();
  }, [])


  useEffect(() => {
      let pregr=[]
      if(Array.isArray(Asignaturas)){
        let AsigProf=Asignaturas.filter((asignatura)=>asignatura.profesor===user.ciuser)
        AsigProf.map((pre)=>{
          if(Array.isArray(Carreras)){
            let carrTemp=Carreras.filter((carrera)=>carrera._id===pre.carrera)
            if(carrTemp[0]){
              let carrera=carrTemp[0].nombre
              if(Array.isArray(Facultades)){
                let facTemp=Facultades.filter((facultad)=>facultad._id===pre.facultad)
                if(facTemp[0]){
                  let facultad=facTemp[0].nombre
                  pregr.push({_id:pre._id,nombre:pre.nombre,semestre:pre.semestre,carrera:carrera,facultad:facultad,tipocurso:pre.tipocurso,horas:pre.horas})
                }
              }  
            }         
          }
        })
      }
    setasignaturas(pregr)
  }, [Carreras,Facultades,Asignaturas,user])


  return (
    <>
      <div className="">        
        <ThPregrado/>
      </div>
      <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {asignaturas.map((pregrado,i)=>(
            <ElementPregrado 
            key={pregrado._id} 
            {...pregrado}
          />
          ))}
            {(asignaturas.length==0) &&
                <h6>No tiene Asignaturas asignadas </h6>
            }
        </div>
    </>
  )
}

export default PregradoLayout
