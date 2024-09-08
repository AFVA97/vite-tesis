import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useProfesor } from "../../../../../context/profesorContext"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ElFacultad = ({asignatura}) => {
    const [active, setactive] = useState(false)
    const [profesor,setProfesor]=useState({nombre:''})
    const {getProfesor}=useProfesor()

    useEffect(() => {
      const load=async()=>{
        if(asignatura.profesor){
            setProfesor(await getProfesor(asignatura.profesor))
        }
      };load()
    }, [,asignatura])
    
  return (
    <>
        <div onClick={()=>setactive(!active)}className="row justify-content-center text-center container-fluid bg-ligth  text-black m-0 p-0">
            <div scope="col" className=" col-4 ">{asignatura.nombre}</div>
            <div scope="col" className=" col-1 ">{asignatura.anno}</div>
            <div scope="col" className=" col-1 ">{asignatura.cantgrupos}</div>
            <div scope="col" className=" col-1 ">{asignatura.tipocurso}</div>
            <div scope="col" className=" col-1 ">{asignatura.frecuencia}</div>
            <div scope="col" className=" col-1 ">{asignatura.semestre?"1ro":"2do"}</div>
            <div scope="col" className=" col-1 ">{asignatura.tutoriaaa}</div>
            <div scope="col" className=" col-1 ">{asignatura.exafinal?"Sí":"No"}</div>
            <div scope="col" className=" col-1 ">{asignatura.horas}</div>            
        </div>
        {active && (
            <div>
              <div>
                <div scope="col" className=" col-12 ">Profesor: {asignatura.profesor?`${profesor.nombre} ${profesor.apellidos}`:"---"}</div>
                <div scope="col" className=" col-12 "><p>Notas: {asignatura.notas?asignatura.notas:"---"}</p></div>
              </div>
              <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                <Link to={`/admin/modificarasignatura/${asignatura._id}`} className="btn btn1 col btn1-warning btn-sm m-2">
                    <FontAwesomeIcon icon={faEdit} /> Modificar
                </Link>
              </div>
            </div>
        )}
    </>
  )
}

export default ElFacultad
