import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function elementFacultad({facultad, ca, cg, cef, th}){
    const [active, setactive] = useState(false);
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className=" col-4 text-truncate ">{facultad}</div>
                <div scope="col" className=" col-2 text-truncate " >{ca}</div>
                <div scope="col" className=" col-2 text-truncate ">{cg}</div>
                <div scope="col" className=" col-2 text-truncate ">{cef}</div>
                <div scope="col" className=" col-2 text-truncate ">{th}</div>
            </div>
            
            {active &&
                
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        <div className="col table-info"><Link to={`info/${facultad}`}>
                            Información</Link>
                        </div>
                        
                        <div className="col table-success">
                            Modificar
                        </div>
                        <div className="col table-danger">
                            Eliminar
                        </div>
                    </div>
                
                
            }
        </>
    );
}

elementFacultad.propTypes={
    facultad:PropTypes.string, 
    ca:PropTypes.number, 
    cg:PropTypes.number, 
    cef:PropTypes.number, 
    th:PropTypes.number
}

export default elementFacultad