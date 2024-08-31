import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useProfesor } from "../../../../context/profesorContext";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function elementPregrado({ _id,nombre,carrera,semestre,facultad,tipocurso,horas}){
    const [active, setactive] = useState(false);
    const {deletesProfesor}=useProfesor()
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className="col-2 text-truncate">{nombre} </div>
                <div scope="col" className="col-3 text-truncate">{carrera}</div>
                
                <div scope="col" className="col-3 text-truncate">{facultad}</div>
                
                <div scope="col" className="col-2 row justify-content-center text-center container-fluid">
                    <div className="col justify-content-center text-center">{semestre?(<input type="radio" readOnly disabled checked></input>): (<input type="radio" readOnly disabled ></input>)}</div>
                    <div className="col justify-content-center text-center">{!semestre?(<input type="radio" readOnly disabled checked></input>): (<input type="radio" readOnly disabled ></input>)}</div>
                </div>
                <div scope="col" className="col-1 text-truncate">{tipocurso}</div>
                <div scope="col" className="col-1 text-truncate">{horas}</div>
            </div>
            
            {active &&
                <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                <Link to={`/teacher/infopre/${_id}`} className="btn btn1 col btn1-info btn-sm m-2">
                    <FontAwesomeIcon icon={faInfoCircle} /> Información
                </Link>
                
            </div>
                    // <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                    //     <div className="col table-info"><Link to={`/teacher/infopre/${_id}`}>
                    //         Información</Link>
                    //     </div>
                        
                        
                        
                    // </div>
                
                
            }
        </>
    );
}

elementPregrado.propTypes={
    id:PropTypes.number,
    nombre:PropTypes.string,
    apellidos:PropTypes.string,
    first:PropTypes.bool, 
    second:PropTypes.bool, 
    te:PropTypes.number, 
    tm:PropTypes.number, 
    th:PropTypes.number
}

export default elementPregrado