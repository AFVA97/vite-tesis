import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useCarrera } from "../../../context/carreraContext";

function elementInicio({_id,nombre,ca,cg,cef,horas}){
    const [active, setactive] = useState(false);
    const {deletesCarrera}=useCarrera()
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className="col-4 text-truncate">{nombre} </div>
                <div scope="col" className="col-2 text-truncate">{ca}</div>
                
                <div scope="col" className="col-2 text-truncate">{cg}</div>
                
                
                <div scope="col" className="col-2 text-truncate">{cef}</div>
                <div scope="col" className="col-2 text-truncate">{horas}</div>
            </div>
            
            {active &&
                
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        <div className="col table-info"><Link to={`/faculty/modificar/${_id}`}>
                            Información</Link>
                        </div>
                       <div className="col table-danger" onClick={()=>deletesCarrera(_id)}>
                            Eliminar
                        </div>
                        
                        
                    </div>
                
                
            }
        </>
    );
}

elementInicio.propTypes={
    id:PropTypes.number,
    nombre:PropTypes.string,
    apellidos:PropTypes.string,
    first:PropTypes.bool, 
    second:PropTypes.bool, 
    te:PropTypes.number, 
    tm:PropTypes.number, 
    th:PropTypes.number
}

export default elementInicio