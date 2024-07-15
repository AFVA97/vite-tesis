import ThlPosgrado from "./thlayout/thlPosgrado"
import ElPosgrado from "./elemlayout/elPosgrado"
import RlPosgrado from "./reviewlayout/rlPosgrado"

function layoutPosgrado({id}){
    const review={hi:2, hr:4,th:6}
    const element={nombre:"posgrado",impartido:true,modalidad:"Qwerty",ubicacion:"Sede",cc:3,horas:6}
    return(
        <>
            <ThlPosgrado />
            <ElPosgrado {...element}/>
            <RlPosgrado {...review}/>
        </>
    )
}
export default layoutPosgrado