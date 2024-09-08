import { useState, useEffect } from "react"
import { useAsignatura } from "../../../../../context/asignaturaContext"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function elPregrado({_id,carrera,anno,semestre,asignatura,horas,frecuencia,taa,tef}){
    const [active, setactive] = useState(false)
    const {getAsignatura,updatesAsignatura}=useAsignatura()
    const [Asignatura, setAsignatura] = useState(null);
    
    useEffect(() => {
        const load=async()=>{
            setAsignatura(await getAsignatura(_id))
        };load()
    }, []);
    
    const handleDelete=async()=>{
        if(Asignatura){
            await updatesAsignatura({...Asignatura,profesor:null})
        }
    }

    return(
        <>
        <div  onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid  m-0 p-0">
            <div scope="col" className=" col-3 ">{carrera}</div>
            <div scope="col" className=" col-1 ">{anno}</div>
            <div scope="col" className=" col-1 ">{semestre?"1ro":"2do"}</div>
            <div scope="col" className=" col-3 ">{asignatura}</div> 
            <div scope="col" className=" col-1 ">{horas}</div>
            <div scope="col" className=" col-1 ">{frecuencia}</div>
            <div scope="col" className=" col-1 ">{taa}</div>
            <div scope="col" className=" col-1 ">{tef}</div> 
        </div> 
        {active &&
            <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                
                <button onClick={()=>handleDelete()} className=" btn btn1 col btn1-danger btn-sm m-2">
                    <FontAwesomeIcon icon={faTrash} /> Quitar Asignación de esta Asignatura
                </button>
                
            </div>
        }   
     </>
    )
}

export default elPregrado