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
    //let fecch=((new Date(fecha)).toLocaleDateString().split('T')[0]).split('/');
    return(
        <>
            <div className="row justify-content-center text-center container-fluid  m-0 p-0">
                <div scope="col" className=" col-5 text-truncate">{nombre}</div>
                <div scope="col" className=" col-3 text-truncate">{tipo}</div>
                <div scope="col" className=" col-2 text-truncate">{horas}</div>
                <div scope="col" className=" col-2 text-truncate">{fecch}</div>
            </div> 
        </>
    )
}



export default elExtUniv