import { useEffect, useState } from "react"
import { usePosgrado } from "../../../../context/posgradoContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function elementPosgrado({_id,nombre,impartido,modalidad,fecha,horas}){
    const [active, setactive] = useState(false);
    const {deletesPosgrado}=usePosgrado()
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
            <div scope="col" className=" col-4   ">{nombre} </div>
                <div scope="col" className=" col-2   ">{impartido?"Sí":"No"}</div>
                <div scope="col" className=" col-2   ">{modalidad}</div>
                <div scope="col" className=" col-2   ">{horas}</div> 
                <div scope="col" className=" col-2   ">{fecch}</div>                
            </div>
            {active &&
                <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                    <button onClick={()=>deletesPosgrado(_id)} className=" btn btn1 col btn1-danger btn-sm m-2">
                        <FontAwesomeIcon icon={faTrash} /> Eliminar
                    </button>
                </div> 
            }
        </>
    );
}



export default elementPosgrado