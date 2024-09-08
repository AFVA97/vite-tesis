import { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useProfesor } from "../../../../context/profesorContext";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function elementPregrado({ _id,nombre, apellidos, first=false, second=false, te, tm, th,profesorInicio,setprofesorInicio}){
    const [active, setactive] = useState(false);
    const {deletesProfesor}=useProfesor()

    const handleDelete=()=>{
        deletesProfesor(_id);
        setprofesorInicio(profesorInicio.filter((Profesor) => Profesor._id !== _id))
    }

    return(
        <>
            <div onClick={()=>{setactive(!active)}}  className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className="col-4 "> {nombre} {apellidos}</div>
                <div scope="col" className="col-3 row justify-content-center text-center container-fluid">
                    <div className="col-6 justify-content-center align-items-center text-center">
                        <div className={`circle ${first ? 'active' : ''} m-auto `}></div>
                    </div>
                    <div className="col-6 justify-content-center text-center">
                        <div className={`circle ${second ? 'active' : ''} m-auto`}></div>
                    </div>
                </div>
                <div scope="col" className="col-1 ">{te}</div>
                <div scope="col" className="col-1 ">{tm}</div>
                <div scope="col" className="col-1 ">{th}</div>
                
            </div>
           
            {active &&
                <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                <Link to={`info/${_id}`} className="btn btn1 col btn1-info btn-sm m-2">
                    <FontAwesomeIcon icon={faInfoCircle} /> Información
                </Link>
                
                
            </div>
                  
            }
        </>
    );
}



export default elementPregrado