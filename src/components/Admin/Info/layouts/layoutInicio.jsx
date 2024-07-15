import LayoutPregrado from "./layoutPregrado"
import LayoutPosgrado from "./layoutPosgrado"
import LayoutInvCient from "./layoutInvCient"
import LayoutExtUniv from "./layoutExtUniv"


function layoutInicio({id}){
    return(
        <>
            <div className="container-fluid">
                <LayoutPregrado {...id}/>
                <LayoutPosgrado {...id}/>
                <LayoutInvCient {...id}/>
                <LayoutExtUniv {...id}/>
            </div>
        </>
    )
}
export default layoutInicio