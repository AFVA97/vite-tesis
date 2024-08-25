import { useEffect, useState } from "react"
import {useProfesor} from '../../../context/profesorContext'
import {useFacultad} from '../../../context/facultadContext'


function titleLayout({_id,isprofesor}){
    const [Profesor, setProfesor] = useState({nombre:"",apellidos:"",graduado:""})
    const {getProfesor}=useProfesor();
    const {getFacultad}=useFacultad();
    
    useEffect(() => {
        const load=async()=>{
            if(isprofesor)
                setProfesor(await getProfesor(_id))
            else
                setProfesor(await getFacultad(_id))
        };load()
    }, [])
    
    
    return(
        <div className="row bg-white">
            <div className="col-6">{isprofesor?`${Profesor.nombre} ${Profesor.apellidos}`:Profesor.nombre}</div>
            {isprofesor && (
                <div className="col-6">
                    Graduado de: {Profesor.graduado}
                </div>
            )}
        </div>
    )
}
export default titleLayout