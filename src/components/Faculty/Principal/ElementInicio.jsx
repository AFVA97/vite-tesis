import { useState } from "react"
import { Link } from "react-router-dom";
import { useCarrera } from "../../../context/carreraContext";
import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function elementInicio({_id,nombre,ca,ac,cg,cef,horas}){
    const [active, setactive] = useState(false);
    const {deletesCarrera}=useCarrera()
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className="col-5  ">{nombre} </div>
                <div scope="col" className="col-2  ">{ca}</div>
                <div scope="col" className="col-2  ">{ac}</div>
                <div scope="col" className="col-1  ">{cg}</div>
                <div scope="col" className="col-1  ">{cef}</div>
                <div scope="col" className="col-1  ">{horas}</div>
            </div>
            {active &&
                <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                    <Link to={`/faculty/modificar/${_id}`} className="btn btn1 col btn1-info btn-sm m-2">
                        <FontAwesomeIcon icon={faInfoCircle} /> Información
                    </Link>
                    <button onClick={()=>deletesCarrera(_id)} className=" btn btn1 col btn1-danger btn-sm m-2">
                        <FontAwesomeIcon icon={faTrash} /> Eliminar
                    </button>
                
                </div>
            }
        </>
    );
}


export default elementInicio