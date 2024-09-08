import { useState } from "react"
import { Link } from "react-router-dom";
import { useFacultad } from "../../../../context/facultadContext";
import { faEdit, faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function elementFacultad({_id,nombre, ca, cg, cef, th}){
    const [active, setactive] = useState(false);
    const {deletesFacultad}=useFacultad()
    const handleDelete=()=>{
        deletesFacultad(_id)
    }

    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className=" col-4 ">{nombre}</div>
                <div scope="col" className=" col-2 " >{ca}</div>
                <div scope="col" className=" col-2 ">{cg}</div>
                <div scope="col" className=" col-2 ">{cef}</div>
                <div scope="col" className=" col-2 ">{th}</div>
            </div>
            {active &&
                    <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                        <Link to={`info/${_id}`} className="btn btn1 col btn1-info btn-sm m-2">
                            <FontAwesomeIcon icon={faInfoCircle} /> Información
                        </Link>
                        <Link to={`/admin/addfacultad/${_id}`} className="btn btn1 col btn1-warning btn-sm m-2">
                            <FontAwesomeIcon icon={faEdit} /> Modificar
                        </Link>
                        <button onClick={handleDelete} className=" btn btn1 col btn1-danger btn-sm m-2">
                            <FontAwesomeIcon icon={faTrash} /> Eliminar
                        </button>
                        
                    </div>
                    // <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                    //     <div className="col table-info"><Link to={`info/${_id}`}>
                    //         Información</Link>
                    //     </div>
                    //     <div className="col table-success"><Link to={`/admin/addfacultad/${_id}`}>
                    //     Modificar</Link>
                    //     </div>
                    //     <div className="col table-danger" onClick={handleDelete}>
                    //         Eliminar
                    //     </div>
                    // </div>
            }
        </>
    );
}



export default elementFacultad