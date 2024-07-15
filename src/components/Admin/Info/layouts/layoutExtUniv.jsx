import ThlExtUniv from "./thlayout/thlExtUniv"
import ElExtUniv from "./elemlayout/elExtUniv"
import RlExtUniv from "./reviewlayout/rlExtUniv"

function layoutExtUniv({id}){
    const review={are:1,tch:2,ae:3,th:4}
    const element={nombre:"extension",horas:11}
    return(
        <>
            <ThlExtUniv/>
            <ElExtUniv {...review}/>
            <RlExtUniv {...element}/>
        </>
    )
}
export default layoutExtUniv
