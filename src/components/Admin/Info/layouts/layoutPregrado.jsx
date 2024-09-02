import ThlPregrado from "./thlayout/thlPregrado"
import ElPregrado from "./elemlayout/elPregrado"
import RlPregrado from "./reviewlayout/rlPregrado"
import {useAsignatura} from '../../../../context/asignaturaContext'
import { useEffect, useState } from "react"
import { useProfesor } from "../../../../context/profesorContext"
import  {useCarrera} from '../../../../context/carreraContext'


function layoutPregrado({_id}){
    const [review, setreview] = useState({first:false, second:false, te:0, tm:0, th:0})
    const [elementos, setelementos] = useState([])
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
        let elememntoTemp=Asignaturas.filter((asignatura)=>asignatura.profesor===_id)
        let element=[]
        let first=false;
        let second=false
        let te=0
        let th=0;
        let tm=0
        if(Array.isArray(elememntoTemp)){
            elememntoTemp.map((asignatura)=>{
                let carre=(Carreras.filter((carrera)=>carrera.id=asignatura.carrera))[0];
                if(carre)
                    carre=carre.nombre
                else
                carre={nombre:''}
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
                    first=true
                }
                else
                    second=true
                te+=parseInt(asignatura.tutoriaaa)
                th+=parseInt(asignatura.horas)

            })
        }
        setelementos(element);
        if(Profesor.trabajometo)
            tm+=parseInt(Profesor.trabajometo)
        th+=parseInt(tm)
        setreview({first,second,te,tm,th})
      }
    }, [Carreras,Asignaturas])
    

    return(
        <>
            <div className="container-fluid text-center">
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
            </div>
        </>
    )
}
export default layoutPregrado