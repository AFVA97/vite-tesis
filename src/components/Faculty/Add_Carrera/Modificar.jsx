import { Link, useParams } from "react-router-dom"
import InfoNavBar from "./infoNavBar"
import { useCarrera } from "../../../context/carreraContext"
import { useEffect, useState } from "react";
import { useAsignatura } from "../../../context/asignaturaContext";
import ElementModificar from "./ElementModificar";


const Modificar = () => {
  
    const {getCarrera}=useCarrera();
    const {Asignaturas,
      errors,        
      getAsignaturas,
      createsAsignatura,
      updatesAsignatura,
      deletesAsignatura,} =useAsignatura()
    const [carrera, setcarrera] = useState(null)
    const [asignaturasCarrera, setasignaturasCarrera] = useState([])
    const _id=useParams()._id;
    useEffect(() => {
      const load=async()=>{
      await getAsignaturas();
      setcarrera(await getCarrera(_id))
    };load();
    }, [])
    const [nombreCarrera, setnombreCarrera] = useState("")
    useEffect(() => {
      if(carrera!=null){
        setnombreCarrera(carrera.nombre)
        if(Array.isArray(Asignaturas)){
          setasignaturasCarrera(Asignaturas.filter((asignatura)=>asignatura.carrera===_id))
          
        }
      }
    }, [Asignaturas,carrera])
    
  return (
    <>
      <div className="sticky-top"> 
          
             
        <InfoNavBar title={`Carrera: ${nombreCarrera}`} link={"/faculty/inicio"}/>
          
      </div>
      <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {asignaturasCarrera.map((asignatura,i)=>(
            <ElementModificar 
            key={asignatura._id} 
            {...asignatura}
          />
          ))}
            
        
      
        </div>
        <Link  to={`/faculty/addasignatura/${_id}`}>          
          <button className="floatingbutton btn btn-primary"
              >Agregar Asignatura</button></Link>
    </>
  )
}

export default Modificar
