import { Link, useParams } from "react-router-dom"
import InfoNavBar from "./infoNavBar"
import { useCarrera } from "../../../context/carreraContext"
import { useEffect, useState } from "react";
import { useAsignatura } from "../../../context/asignaturaContext";
import ElementModificar from "../Asignaturas/ElementModificar";


const Modificar = () => {
  
    const {getCarrera}=useCarrera();
    const {Asignaturas, getAsignaturas} =useAsignatura()
    const [asigCon, setasigCon] = useState([])
    const [asigSin, setasigSin] = useState([])
    const [conProf, setconProf] = useState(asigCon.length>0)
    const [sinProf, setsinProf] = useState(asigSin.length>0)
    const [carrera, setcarrera] = useState(null)
    const [asignaturasCarrera, setasignaturasCarrera] = useState([])
    const _id=useParams()._id;
    const [nombreCarrera, setnombreCarrera] = useState("")
    
    useEffect(() => {
      const load=async()=>{
      await getAsignaturas();
      setcarrera(await getCarrera(_id))
    };load();
    }, [])   
     
    useEffect(() => {
      if(carrera!=null){
        setnombreCarrera(carrera.nombre)
        if(Array.isArray(Asignaturas)){
          setasignaturasCarrera(Asignaturas.filter((asignatura)=>asignatura.carrera===_id))
        }
      }
    }, [Asignaturas,carrera])
    
    useEffect(() => {
      setasigCon(asignaturasCarrera.filter((asignatura)=>asignatura.profesor))
      setasigSin(asignaturasCarrera.filter((asignatura)=>!asignatura.profesor))
      setconProf(asigCon.length>0)
      setsinProf(asigSin.length>0)
    }, [asignaturasCarrera])

    useEffect(() => {
      if(asignaturasCarrera.length==0){
        setconProf(false)
        setsinProf(false)
      }
    }, [asignaturasCarrera])
    
    
  return (
    <>
      <div className="sticky-top"> 
        <InfoNavBar title={`Carrera: ${nombreCarrera}`} link={"/faculty/inicio"}/>
      </div>
      <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
      {sinProf && (<div className='text-center'>
            <h6>Sin Profesor Asignado</h6>
            {asigSin.map((asignatura)=>(
              <ElementModificar 
                key={asignatura._id}
                asignatura={asignatura}/>
            ))}
        </div>)}
        {conProf && (<div className='text-center'>
            <h6>Con Profesor Asignado</h6>
            {asigCon.map((asignatura)=>(
            <ElementModificar 
                key={asignatura._id}
                asignatura={asignatura}/>
            ))}
        </div>)}
        {asignaturasCarrera.length<1 && (
            <div className='text-center'><p>No hay Asignaturas en esta Carrera</p></div>
        )}
        </div>
        <Link  to={`/faculty/addasignatura/${_id}`}>          
          <button className="floatingbutton btn btn-success"
              >Agregar Asignatura</button></Link>
    </>
  )
}

export default Modificar
