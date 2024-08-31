import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { usePosgrado } from "../../../../context/posgradoContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function elementPosgrado({_id,nombre,impartido,modalidad,fecha,horas}){
    const [active, setactive] = useState(false);
    const {deletesPosgrado}=usePosgrado()
    //let fecch=((new Date(fecha)).toLocaleDateString().split('T')[0]).split('/');
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
    let impart="Sí"
    if(!impartido)
        impart="No"
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
            <div scope="col" className=" col-4  text-truncate">{nombre} </div>
                <div scope="col" className=" col-2 text-truncate ">{impart}</div>
                <div scope="col" className=" col-2  text-truncate">{modalidad}</div>
                <div scope="col" className=" col-2 text-truncate ">{horas}</div> 
                <div scope="col" className=" col-2 text-truncate ">{fecch}</div>                
            </div>
            
            {active &&
                <div className="row justify-content-center text-center bg-light container-fluid m-0 p-0">
                    
                    <button onClick={()=>deletesPosgrado(_id)} className=" btn btn1 col btn1-danger btn-sm m-2">
                        <FontAwesomeIcon icon={faTrash} /> Eliminar
                    </button>
                    
                </div>
                    // <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        
                        
                        
                    //     <div className="col table-danger" onClick={()=>deletesPosgrado(_id)}>
                    //         Eliminar
                    //     </div>
                    // </div>
                
                
            }
        </>
    );
}

elementPosgrado.propTypes={
    id:PropTypes.number,
    nombre:PropTypes.string,
    apellidos:PropTypes.string,
    hr:PropTypes.number,
    hi:PropTypes.number,
    th:PropTypes.number
}

export default elementPosgrado