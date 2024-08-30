import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useInvCient } from "../../../../context/invcientContext";

function elementInvCient({_id,titulo, tipo, fecha}){
    const [active, setactive] = useState(false);
    const {deletesInvCient }=useInvCient()
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
    
    return(
        <>
            <div onClick={()=>{setactive(!active)}} className="row justify-content-center text-center container-fluid m-0 p-0">
                <div scope="col" className=" col-6 text-truncate">{titulo}</div>
                <div scope="col" className=" col-4 text-truncate">{tipo}</div>
                <div scope="col" className=" col-2 text-truncate">{fecch}</div>
                
            </div>
            
            {active &&
                
                    <div className="row justify-content-center text-center bg-ligth container-fluid m-0 p-0">
                        
                        <div className="col table-info"><Link to={`/teacher/infoinv/${_id}`}>
                            Información</Link>
                        </div>
                        <div className="col table-danger" onClick={()=>deletesInvCient(_id)}>
                            Eliminar
                        </div>
                        
                    </div>
                
                
            }
        </>
    );
}

elementInvCient.propTypes={
    id:PropTypes.number,
    nombre:PropTypes.string,
    apellidos:PropTypes.string,
    pt:PropTypes.number,
    tf:PropTypes.number,
    pi:PropTypes.number,
    tt:PropTypes.number,
    th:PropTypes.number
}

export default elementInvCient