import { useEffect, useState } from "react";
import { useAsignatura } from "../../../context/asignaturaContext";
import { useProfesor } from "../../../context/profesorContext";




const ElementModificar = ({_id,nombre, anno,semestre, tipocurso,cantgrupos,horas,profesor,exafinal, notas}) => {
    const [active, setactive] = useState(false);
    const {deletesAsignatura}=useAsignatura()
    const {getProfesor}=useProfesor()
    const [Profesor, setProfesor] = useState(null)
    useEffect(() => {
        const load=async()=>{
            if(profesor)
                setProfesor(await getProfesor(profesor));
          };load();
    }, [])
    
    
  return (
    <>
        <div onClick={()=>{setactive(!active)}}>
            <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                    <div scope="col" className="col-6 ">Asignatura: {nombre} </div>
                    <div scope="col" className="col-3 ">Tipo de Curso:{tipocurso}</div>
                    
                    <div scope="col" className="col-3 ">Cantidad de Grupos: {cantgrupos}</div>
                    
                    
                    
            </div>

            <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                    <div scope="col" className="col-3 text-truncate">Año: {anno} </div>
                    <div scope="col" className="col-3 text-truncate">Examen Final:{exafinal?("Sí"):("No")}</div>
                    
                    <div scope="col" className="col-3 text-truncate">Semestre:{semestre?("1ro"):("2do")}</div>
                    <div scope="col" className="col-3 text-truncate">Horas: {horas}</div>
                    
                    
            </div>
            <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                    <div scope="col" className="col-12 text-truncate">Profesor: {Profesor?Profesor.nombre:"---"} </div>
            </div>
            <div  className="row justify-content-center text-center container-fluid m-0 p-0">
                    <div scope="col" className="col-12 text-truncate">Notas: </div>
                    <div scope="col" className="col-12"><p>{notas}</p> </div>
            </div>
        </div>
      {active &&
                
                <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                    
                    
                    
                    <div className="col table-danger" onClick={()=>deletesAsignatura(_id)}>
                        Eliminar
                    </div>
                    
                    
                </div>
            
            
        }
    </>
  )
}

export default ElementModificar
