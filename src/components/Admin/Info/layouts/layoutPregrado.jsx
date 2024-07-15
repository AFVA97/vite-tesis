import ThlPregrado from "./thlayout/thlPregrado"
import ElPregrado from "./elemlayout/elPregrado"
import RlPregrado from "./reviewlayout/rlPregrado"

function layoutPregrado({id}){
    const review={first:true, second:false, te:4, tm:5, th:6}
    const element={carrera:"info",anno:3,semestre:true,asignatura:"Filo",horas:34,frecuencia:2,taa:3,tef:"EF"}
    //en el caso del semestre  es booleano ya que las asignaturas de marxismo generalmente son de un solo semestre
    return(
        <>
            <ThlPregrado />
            <ElPregrado {...element}/>
            <RlPregrado {...review}/>
        </>
    )
}
export default layoutPregrado