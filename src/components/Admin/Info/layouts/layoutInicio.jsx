import LayoutPregrado from "./layoutPregrado"
import LayoutPosgrado from "./layoutPosgrado"
import LayoutInvCient from "./layoutInvCient"
import LayoutExtUniv from "./layoutExtUniv"


function layoutInicio({_id}){
    return(
        <>
            <div className="container-fluid text-center">
                <h6>Pregrado</h6>
                <LayoutPregrado _id={_id}/>
                <h6>Posgrado</h6>
                <LayoutPosgrado _id={_id}/>
                <h6 >Investigación Científica</h6>
                <LayoutInvCient _id={_id}/>
                <h6>Extensión Univeraitaria</h6>
                <LayoutExtUniv _id={_id}/>
            </div>
        </>
    )
}
export default layoutInicio