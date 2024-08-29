import { useEffect, useState } from "react";
import { useAsignatura } from "../../../context/asignaturaContext";
import { useProfesor } from "../../../context/profesorContext";




const ElementModificar = ({asignatura}) => {
    const [active, setactive] = useState(false);
    const {deletesAsignatura}=useAsignatura()
    const {getProfesor}=useProfesor()
    const [Profesor, setProfesor] = useState(null)
    useEffect(() => {
        const load=async()=>{
            if(asignatura.profesor)
                setProfesor(await getProfesor(asignatura.profesor));
          };load();
    }, [])
    
    
  return (
    <>
        <div onClick={()=>{setactive(!active)}} className="border">
            <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                    <div scope="col" className="col-6 ">Asignatura: {asignatura.nombre} </div>
                    <div scope="col" className="col-3 ">Tipo de Curso: {asignatura.tipocurso}</div>
                    <div scope="col" className="col-3 ">Cantidad de Grupos: {asignatura.cantgrupos}</div>
            </div>

            <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                    <div scope="col" className="col-3 text-truncate">Año: {asignatura.anno} </div>
                    <div scope="col" className="col-3 text-truncate">Examen Final: {asignatura.exafinal?("Sí"):("No")}</div>
                    <div scope="col" className="col-3 text-truncate">Semestre: {asignatura.semestre?("1ro"):("2do")}</div>
                    <div scope="col" className="col-3 text-truncate">Horas: {asignatura.horas}</div>
                    
                    
            </div>
            <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                    <div scope="col" className="col-12">Profesor: {Profesor?`${Profesor.nombre} ${Profesor.apellidos}`:"---"} </div>
            </div>
            <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                    <div scope="col" className="col-12">Notas: </div>
                    <div scope="col" className="col-12"><p>{asignatura.notas===""?"---":asignatura.notas}</p> </div>
            </div>
        </div>
      {active &&
                
                <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                    
                    
                    
                    <div className="col table-danger" onClick={()=>deletesAsignatura(asignatura._id)}>
                        Eliminar
                    </div>
                    
                    
                </div>
            
            
        }
    </>
  )
}

export default ElementModificar