import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function elementInicio({id,nombre, apellidos, graduado, hpre, hpos, hic, heu, th}){
    const [active, setactive] = useState(false);
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}}  className="container-fluid pe-auto" >
                <table className="container border">
                    <tbody>
                        <tr className="justify-content-center text-center">
                            <td scope="col" className="col-4">{nombre} {apellidos}</td>
                            <td scope="col" className="col-3">{graduado}</td>
                            <td scope="col" className="col-1">{hpre}</td>
                            <td scope="col" className="col-1">{hpos}</td>
                            <td scope="col" className="col-1">{hic}</td>
                            <td scope="col" className="col-1">{heu}</td>
                            <td scope="col" className="col-1">{th}</td> 
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            {active &&
                <div className="container text-center  ">
                    <div className="row align-items-start rounded-bottom">
                        
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
                </div>
                
            }
        </>
    );
}

elementInicio.propTypes={
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

export default elementInicio