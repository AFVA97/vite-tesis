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
            <div scope="col" className=" col-1 text-truncate">{asignatura.tutoriaa}</div>
            <div scope="col" className=" col-1 text-truncate">{asignatura.exafinal?"Sí":"No"}</div>
            <div scope="col" className=" col-1 text-truncate">{asignatura.horas}</div>            
        </div>
        {active && (
            <div>
                <div>
                <div scope="col" className=" col-12 text-truncate">Notas: {asignatura.notas?asignatura.notas:"---"}</div>
                <div scope="col" className=" col-12 text-truncate">Profesor: {asignatura.profesor?`${profesor.nombre} ${profesor.apellidos}`:"---"}</div>
            </div>
            <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0"> 
                <div className="col table-success"><Link to={`/admin/modificarasignatura/${asignatura._id}`}>
                Modificar</Link>
                </div>
            </div>
            </div>
        )}
           
    
      {/* <div className="row p-5">
                
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" id="basic-addon1">Asignatura</span>
                    <span className="input-group-text" id="basic-addon1">{asignatura.nombre}</span>
                </div>
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" id="basic-addon1">Año</span>
                    <span className="input-group-text" id="basic-addon1">{asignatura.anno}</span>
                </div>
                

                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">Cantidad de Grupos</span>
                    <span className="input-group-text" id="basic-addon1">{asignatura.cantgrupos}</span>
                </div>
                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">Horas</span>
                    <span className="input-group-text" id="basic-addon1">{asignatura.horas}</span>
                </div>
                <div className="input-group mb-3 p-1 col-6">
                    <span className="input-group-text" id="basic-addon1">Tipo de Curso</span>
                    <span className="input-group-text" id="basic-addon1">{asignatura.tipocurso}</span>
                    
                </div>
                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">Frecuencia</span>
                    <span className="input-group-text" id="basic-addon1">{asignatura.frecuencia}</span>
                </div>
                
                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">Tutoría a Alumnos Ayudantes</span>
                    <span className="input-group-text" id="basic-addon1">{asignatura.tutoriaaa}</span>
                </div>
                <div className="row justify-content-around container-fluid ">
                        <span className="input-group-text" id="basic-addon1">Semestre</span>
                        <span className="input-group-text" id="basic-addon1">{asignatura.semestre?"1er":"2do"}</span>
                        
                        
                    
                        <span className="input-group-text" id="basic-addon1">Examen Final</span>
                        <span className="input-group-text" id="basic-addon1">{asignatura.exafinal?"Sí":"No"}</span>
                    
                </div>
            </div> */}
    </>
  )
}

export default ElFacultad
