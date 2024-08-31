import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { Link } from "react-router-dom";

function elementExtUniv({_id,nombre, apellidos, are, tch, ae, th}){
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
                    <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                    <Link to={`info/${_id}`} className="btn btn1 col btn1-info btn-sm m-2">
                        <FontAwesomeIcon icon={faInfoCircle} /> Información
                    </Link>
                    
                    
                </div>
                    // <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                    //     <div className="col table-info"><Link to={`info/${_id}`}>
                    //         Información</Link>
                    //     </div>
                    // </div>
            }
        </>
    );
}



export default elementExtUniv