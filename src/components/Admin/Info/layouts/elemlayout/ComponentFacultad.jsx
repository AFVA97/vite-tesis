import React, { useEffect, useState } from 'react'
import ThFacultad from '../thlayout/thFacultad'
import ElFacultad from './elFacultad'
import ThAsignatura from '../thlayout/ThAsignatura'

const ComponentFacultad = ({asignaturas,carrera}) => {
    const [asigCon, setasigCon] = useState([])
    const [asigSin, setasigSin] = useState([])
    const [conProf, setconProf] = useState(asigCon.length>0)
    const [sinProf, setsinProf] = useState(asigSin.length>0)

    useEffect(() => {
      setasigCon(asignaturas.filter((asignatura)=>asignatura.profesor))
      setasigSin(asignaturas.filter((asignatura)=>!asignatura.profesor))
      setconProf(asigCon.length>0)
      setsinProf(asigSin.length>0)
    }, [,asignaturas])
    
  return (
    <>
        <ThFacultad
            key={carrera._id} 
            carrera={carrera.nombre}/>
        {sinProf && (<div className='text-center'>
            <h6>Sin Profesor Asignado</h6>
            <ThAsignatura/>
            {asigSin.map((asignatura)=>(
                <ElFacultad 
                    key={asignatura._id}
                    asignatura={asignatura}/>
            ))}
        </div>)}
        {conProf && (<div className='text-center'>
            <h6>Con Profesor Asignado</h6>
            <ThAsignatura/>
            {asigCon.map((asignatura)=>(
                <ElFacultad 
                    key={asignatura._id}
                    asignatura={asignatura}/>
            ))}
        </div>)}
        {asignaturas.length<1 && (
            <div className='text-center'><p>No hay Asignaturas en esta Carrera</p></div>
        )}
    </>
  )
}

export default ComponentFacultad
