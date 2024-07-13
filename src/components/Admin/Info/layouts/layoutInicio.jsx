import LayoutPregrado from "./layoutPregrado"
import LayoutPosgrado from "./layoutPosgrado"
import LayoutInvCient from "./layoutInvCient"
import LayoutExtUniv from "./layoutExtUniv"


function layoutInicio(){
    return(
        <>
            <div className="container-fluid">
                <LayoutPregrado/>
                <LayoutPosgrado/>
                <LayoutInvCient/>
                <LayoutExtUniv/>
            </div>
        </>
    )
}
export default layoutInicio