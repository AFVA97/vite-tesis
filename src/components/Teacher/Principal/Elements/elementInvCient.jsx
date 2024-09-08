import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useInvCient } from "../../../../context/invcientContext";
import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function elementInvCient({_id,titulo, tipo, fecha}){
    const [active, setactive] = useState(false);
    const {deletesInvCient }=useInvCient()
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
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className=" col-6  ">{titulo}</div>
                <div scope="col" className=" col-4  ">{tipo}</div>
                <div scope="col" className=" col-2  ">{fecch}</div>
            </div>
            {active &&
                <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                    <Link to={`/teacher/infoinv/${_id}`} className="btn btn1 col btn1-info btn-sm m-2">
                        <FontAwesomeIcon icon={faInfoCircle} /> Información
                    </Link>
                    <button onClick={()=>deletesInvCient(_id)} className=" btn btn1 col btn1-danger btn-sm m-2">
                        <FontAwesomeIcon icon={faTrash} /> Eliminar
                    </button>
                </div>
            }
        </>
    );
}


export default elementInvCient