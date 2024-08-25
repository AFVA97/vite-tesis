import { useEffect, useState } from "react"
import { useAsignatura } from "../../../../context/asignaturaContext"
import { useCarrera } from "../../../../context/carreraContext"
import ThFacultad from "./thlayout/thFacultad"
import ElFacultad from "./elemlayout/elFacultad"
import ComponentFacultad from "./elemlayout/ComponentFacultad"




function layoutFacultad({_id}){
    const [carrerasFac, setcarrerasFac] = useState([])
    const [AsignaturasFac, setAsignaturasFac] = useState([])
    const{ Asignaturas, getAsignaturas }=useAsignatura()
    const{ Carreras, getCarreras }= useCarrera()

    useEffect(() => {
      const load=async()=>{
        await getAsignaturas();
        await getCarreras();

      };load()
    }, [])

    useEffect(() => {
      if(Array.isArray(Carreras)){
        setcarrerasFac(Carreras.filter((carrera)=>carrera.facultad===_id))        
      }
      if(Array.isArray(Asignaturas)){
        setAsignaturasFac(Asignaturas.filter((asignatura)=>asignatura.facultad===_id))
      }
    }, [Carreras,Asignaturas])
    
    return(
        <>
            {carrerasFac.map((carrera)=>(
                <ComponentFacultad
                    key={carrera._id}
                    carrera={carrera}
                    asignaturas={AsignaturasFac.filter((asignatura)=>asignatura.carrera===carrera._id)}
                />
            ))}
        </>
    )
}
export default layoutFacultad
