import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useExtUniv } from "../../../../context/extunivContext";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function elementExtUniv({_id,titulo,tipo,horas,fecha}){
    const [active, setactive] = useState(false);
    const {deletesExtUniv }=useExtUniv()
    const [fecch, setFecch] = useState('');

    useEffect(() => {
        const obtenerFecha = () => {
            const fechaActual = new Date(fecha);
            const dia = String(fechaActual.getDate()).padStart(2, '0');
            const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
            const año = fechaActual.getFullYear();
            setFecch(`${dia}/${mes}/${año}`);
        };

        obtenerFecha();
    }, []);
    //let fecch=((new Date(fecha)).toLocaleDateString().split('T')[0]).split('/');
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
            <div scope="col" className=" col-6 text-truncate">{titulo}</div>
                <div scope="col" className=" col-2 text-truncate">{tipo}</div>
                <div scope="col" className=" col-2 text-truncate">{horas}</div>
                <div scope="col" className=" col-2 text-truncate">{fecch}</div>
                
            </div>
            
            {active &&
                <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                    
                    <Link to={`/teacher/addext_univ/${_id}`} className="btn btn1 col btn1-warning btn-sm m-2">
                        <FontAwesomeIcon icon={faEdit} /> Modificar
                    </Link>
                    <button onClick={()=>deletesExtUniv(_id)} className=" btn btn1 col btn1-danger btn-sm m-2">
                        <FontAwesomeIcon icon={faTrash} /> Eliminar
                    </button>
                    
                </div>
                    // <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                    //     <div className="col table-success"><Link to={`/teacher/addext_univ/${_id}`}>
                    //         Modificar</Link>
                    //     </div>
                    //     <div className="col table-danger" onClick={()=>deletesExtUniv(_id)}>
                    //         Eliminar
                    //     </div>
                        
                    // </div>
                
                
            }
        </>
    );
}

elementExtUniv.propTypes={
    id:PropTypes.number,
    nombre:PropTypes.string,
    apellidos:PropTypes.string,
    are:PropTypes.number,
    tch:PropTypes.number,
    ae:PropTypes.number,
    th:PropTypes.number
}

export default elementExtUniv