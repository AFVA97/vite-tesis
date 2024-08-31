import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useProfesor } from "../../../../../context/profesorContext"

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
            <div scope="col" className=" col-4 text-truncate">{asignatura.nombre}</div>
            <div scope="col" className=" col-1 text-truncate">{asignatura.anno}</div>
            <div scope="col" className=" col-1 text-truncate">{asignatura.cantgrupos}</div>
            <div scope="col" className=" col-1 text-truncate">{asignatura.tipocurso}</div>
            <div scope="col" className=" col-1 text-truncate">{asignatura.frecuencia}</div>
            <div scope="col" className=" col-1 text-truncate">{asignatura.semestre?"1ro":"2do"}</div>
            <div scope="col" className=" col-1 text-truncate">{asignatura.tutoriaaa}</div>
            <div scope="col" className=" col-1 text-truncate">{asignatura.exafinal?"Sí":"No"}</div>
            <div scope="col" className=" col-1 text-truncate">{asignatura.horas}</div>            
        </div>
        {active && (
            <div>
              <div>
                <div scope="col" className=" col-12 text-truncate">Profesor: {asignatura.profesor?`${profesor.nombre} ${profesor.apellidos}`:"---"}</div>
                <div scope="col" className=" col-12 text-truncate">Notas: {asignatura.notas?asignatura.notas:"---"}</div>
              </div>
              <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0"> 
                  <div className="col table-success"><Link to={`/admin/modificarasignatura/${asignatura._id}`}>
                  Modificar</Link>
                  </div>
              </div>
            </div>
        )}
    </>
  )
}

export default ElFacultad
