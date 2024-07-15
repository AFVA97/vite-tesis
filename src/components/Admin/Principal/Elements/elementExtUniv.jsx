import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function elementExtUniv({id,nombre, apellidos, are, tch, ae, th}){
    const [active, setactive] = useState(false);
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
            <div scope="col" className=" col-4 text-truncate">{nombre} {apellidos}</div>
                <div scope="col" className=" col-2 text-truncate">{are}</div>
                <div scope="col" className=" col-2 text-truncate">{tch}</div>
                <div scope="col" className=" col-2 text-truncate">{ae}</div>
                <div scope="col" className=" col-2 text-truncate">{th}</div> 
                
            </div>
            
            {active &&
                
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        <div className="col table-info"><Link to={`info/${id}`}>
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

elementExtUniv.propTypes={
    id:PropTypes.number,
    nombre:PropTypes.string,
    apellidos:PropTypes.string,
    are:PropTypes.number,
    tch:PropTypes.number,
    ae:PropTypes.number,
    th:PropTypes.number
}

export default elementExtUniv