import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { Link } from "react-router-dom";

function elementInvCient({_id,nombre, apellidos, proyecto, premios, publicaciones,otros}){
    const [active, setactive] = useState(false);
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className=" col-4 ">{nombre} {apellidos}</div>
                <div scope="col" className=" col-2 ">{proyecto}</div>
                <div scope="col" className=" col-2 ">{premios}</div>
                <div scope="col" className=" col-2 ">{publicaciones}</div>
                <div scope="col" className=" col-2 ">{otros}</div>
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


export default elementInvCient