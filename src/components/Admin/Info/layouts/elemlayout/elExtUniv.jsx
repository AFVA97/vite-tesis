import { useEffect, useState } from "react";


function elExtUniv({nombre, tipo, horas, fecha}){
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
            <div className="row justify-content-center text-center container-fluid  m-0 p-0">
                <div scope="col" className=" col-5 ">{nombre}</div>
                <div scope="col" className=" col-3 ">{tipo}</div>
                <div scope="col" className=" col-2 ">{horas}</div>
                <div scope="col" className=" col-2 ">{fecch}</div>
            </div> 
        </>
    )
}



export default elExtUniv