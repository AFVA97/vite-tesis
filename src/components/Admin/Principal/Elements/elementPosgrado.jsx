import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function elementPosgrado({_id,nombre, apellidos, hi, hr,th}){
    const [active, setactive] = useState(false);
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
            <div scope="col" className=" col-4  text-truncate">{nombre} {apellidos}</div>
                <div scope="col" className=" col-3 text-truncate ">{hi}</div>
                <div scope="col" className=" col-3  text-truncate">{hr}</div>
                <div scope="col" className=" col-2 text-truncate ">{th}</div>                 
            </div>
            
            {active &&
                
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        <div className="col table-info"><Link to={`info/${_id}`}>
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

elementPosgrado.propTypes={
    id:PropTypes.number,
    nombre:PropTypes.string,
    apellidos:PropTypes.string,
    hr:PropTypes.number,
    hi:PropTypes.number,
    th:PropTypes.number
}

export default elementPosgrado