import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function elementExtUniv({id,nombre, apellidos, graduado, hpre, hpos, hic, heu, th}){
    const [active, setactive] = useState(false);
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className="col-4">{nombre} {apellidos}</div>
                <div scope="col" className="col-3">{graduado}</div>
                <div scope="col" className="col-1">{hpre}</div>
                <div scope="col" className="col-1">{hpos}</div>
                <div scope="col" className="col-1">{hic}</div>
                <div scope="col" className="col-1">{heu}</div>
                <div scope="col" className="col-1">{th}</div> 
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
    graduado:PropTypes.string,
    hpre:PropTypes.number,
    hpos:PropTypes.number,
    hic:PropTypes.number,
    heu:PropTypes.number,
    th:PropTypes.number
}

export default elementExtUniv