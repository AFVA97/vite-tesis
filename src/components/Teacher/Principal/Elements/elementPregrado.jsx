import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function elementPregrado({ _id,nombre,carrera,semestre,facultad,tipocurso,horas}){
    const [active, setactive] = useState(false);
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className="col-2 text-truncate">{nombre} </div>
                <div scope="col" className="col-3 text-truncate">{carrera}</div>
                <div scope="col" className="col-3 text-truncate">{facultad}</div>
                <div scope="col" className="col-2 row justify-content-center text-center container-fluid">
                    <div className="col-6 justify-content-center align-items-center text-center">
                        <div className={`circle ${semestre ? 'active' : ''} m-auto `}></div>
                    </div>
                    <div className="col-6 justify-content-center text-center">
                        <div className={`circle ${!semestre ? 'active' : ''} m-auto`}></div>
                    </div>
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
            }
        </>
    );
}


export default elementPregrado