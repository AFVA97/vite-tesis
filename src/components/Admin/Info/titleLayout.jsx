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
        <div className=" bg-white">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label >{isprofesor?`${Profesor.nombre} ${Profesor.apellidos}`:Profesor.nombre}</label>
                </div>
                <div className="form-group col-md-6 text-right">
                    {isprofesor && (
                        <label >
                            Graduado de: {Profesor.graduado}
                        </label>
                    )}
                </div>
            </div>
            
            
        </div>
    )
}
export default titleLayout