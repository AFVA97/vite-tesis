import ThlPregrado from "./thlayout/thlPregrado"
import ElPregrado from "./elemlayout/elPregrado"
import RlPregrado from "./reviewlayout/rlPregrado"
import {useAsignatura} from '../../../../context/asignaturaContext'
import { useEffect, useState } from "react"
import { useProfesor } from "../../../../context/profesorContext"
import  {useCarrera} from '../../../../context/carreraContext'


function layoutPregrado({_id}){
    let review={first:false, second:false, te:0, tm:0, th:0}
    //const element={carrera:"info",anno:3,semestre:true,asignatura:"Filo",horas:34,frecuencia:2,taa:3,tef:"EF"}
    const [elementos, setelementos] = useState([])
    //en el caso del semestre  es booleano ya que las asignaturas de marxismo generalmente son de un solo semestre
    const {Asignaturas,getAsignaturas}=useAsignatura()
    const {Carreras,getCarreras}=useCarrera()
    const [Profesor, setProfesor] = useState({nombre:"",apellidos:"",graduado:""})
    const {getProfesor}=useProfesor();

    useEffect(() => {
        const load=async () => {
            await getCarreras()
            await getAsignaturas();
            setProfesor(await getProfesor(_id))
            
          };load()
    }, [])
    useEffect(() => {
      if(Array.isArray(Asignaturas)){
        //console.log(Profesor);
        
        let elememntoTemp=Asignaturas.filter((asignatura)=>asignatura.profesor===_id)
        let element=[]
        if(Array.isArray(elememntoTemp)){
            elememntoTemp.map((asignatura)=>{
                let carre=(Carreras.filter((carrera)=>carrera.id=asignatura.carrera))[0].nombre;
                element.push({
                    carrera:carre,
                    _id:asignatura._id,
                    anno:asignatura.anno,
                    semestre:asignatura.semestre,
                    asignatura:asignatura.nombre,
                    horas:asignatura.horas,
                    frecuencia:asignatura.frecuencia,
                    taa:asignatura.tutoriaaa
                    ,tef:asignatura.exafinal?"Sí":"No"})
                if(asignatura.semestre){
                    review.first=true
                }
                else
                    review.second=true
                review.te+=parseInt(asignatura.tutoriaaa)
                review.th+=parseInt(asignatura.horas)

            })
        }
        setelementos(element);
        if(Profesor.trabajometo)
            review.tm+=parseInt(Profesor.trabajometo)
        review.th+=parseInt(review.tm)
      }
    }, [Asignaturas])
    
    

    return(
        <>
            <ThlPregrado />
            {elementos.map((element)=>(
                <ElPregrado 
                key={element._id}
                {...element}/>
            ))}
            {(elementos.length===0) && (
                <><div className="row justify-content-center text-center container-fluid  m-0 p-0">
                    No tiene Asignaturas Asignadas
                </div> </>)}
            <RlPregrado {...review}/>
        </>
    )
}
export default layoutPregrado