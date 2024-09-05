import LayoutPregrado from "./layoutPregrado"
import LayoutPosgrado from "./layoutPosgrado"
import LayoutInvCient from "./layoutInvCient"
import LayoutExtUniv from "./layoutExtUniv"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"


function layoutInicio({_id}){
    const [desplegadoPre, setdesplegadoPre] = useState(true)
    const [desplegadoPos, setdesplegadoPos] = useState(true)
    const [desplegadoInv, setdesplegadoInv] = useState(true)
    const [desplegadoExt, setdesplegadoExt] = useState(true)
    return(
        <>
            <div className=" text-center">
                <div className="d-flex justify-content-between align-items-center border container-fluid  m-0 p-2" onClick={() => setdesplegadoPre(!desplegadoPre)}>
                    <h6 className='mb-0'>Pregrado</h6>
                    <FontAwesomeIcon icon={desplegadoPre ? faChevronUp : faChevronDown} />
                </div>
                {desplegadoPre&& <LayoutPregrado _id={_id}/>}
                <div className="d-flex justify-content-between align-items-center border container-fluid  m-0 p-2" onClick={() => setdesplegadoPos(!desplegadoPos)}>
                    <h6 className='mb-0'>Posgrado</h6>
                    <FontAwesomeIcon icon={desplegadoPos ? faChevronUp : faChevronDown} />
                </div>
                {desplegadoPos&& <LayoutPosgrado _id={_id}/>}
                <div className="d-flex justify-content-between align-items-center border container-fluid  m-0 p-2" onClick={() => setdesplegadoInv(!desplegadoInv)}>
                    <h6 className='mb-0'>Investigación Científica</h6>
                    <FontAwesomeIcon icon={desplegadoPre ? faChevronUp : faChevronDown} />
                </div>
                {desplegadoInv&& <LayoutInvCient _id={_id}/>}
                <div className="d-flex justify-content-between align-items-center border container-fluid  m-0 p-2" onClick={() => setdesplegadoExt(!desplegadoExt)}>
                    <h6 className='mb-0'>Extensión Univeraitaria</h6>
                    <FontAwesomeIcon icon={desplegadoPre ? faChevronUp : faChevronDown} />
                </div>
                {desplegadoExt&& <LayoutExtUniv _id={_id}/>}
                
                
            </div>
        </>
    )
}
export default layoutInicio