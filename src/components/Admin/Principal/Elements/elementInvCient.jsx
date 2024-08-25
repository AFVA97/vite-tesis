import { useState } from "react"
import { Link } from "react-router-dom";

function elementInvCient({_id,nombre, apellidos, proyecto, premios, publicaciones,otros}){
    const [active, setactive] = useState(false);
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className=" col-4 text-truncate">{nombre} {apellidos}</div>
                <div scope="col" className=" col-2 text-truncate">{proyecto}</div>
                <div scope="col" className=" col-2 text-truncate">{premios}</div>
                <div scope="col" className=" col-2 text-truncate">{publicaciones}</div>
                <div scope="col" className=" col-2 text-truncate">{otros}</div>
            </div>
            {active &&
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        <div className="col table-info"><Link to={`info/${_id}`}>
                            Información</Link>
                        </div>
                    </div>
            }
        </>
    );
}


export default elementInvCient