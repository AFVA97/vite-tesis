import ThlInvCient from "./thlayout/thlInvCient"
import ElInvCient from "./elemlayout/elInvCient"
import RlInvCient from "./reviewlayout/rlInvCient"

function layoutInvCient({id}){
    const review={pt:2, tf:3, pi:4, tt:5, th:6}
    const element={ti:"tipo",titulo:"investigacion",alcance:true,horas:5}
    //alcance true para nacional y false para internacional
    return(
        <>
            <ThlInvCient  />
            <ElInvCient {...element}/>
            <RlInvCient {...review}/>
        </>
    )
}
export default layoutInvCient