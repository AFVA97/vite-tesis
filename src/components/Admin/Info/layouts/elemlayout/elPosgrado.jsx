import { useEffect, useState } from "react";


function elPosgrado({nombre,impartido,modalidad,ubicacion,cc,horas,fecha}){

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
                <div scope="col" className=" col-3 ">{nombre}</div>
                <div scope="col" className=" col-1 ">{impartido?("Sí"):("No")}</div>
                <div scope="col" className=" col-2 ">{modalidad}</div>
                <div scope="col" className=" col-3 ">{ubicacion}</div> 
                <div scope="col" className=" col-1 ">{cc}</div>
                <div scope="col" className=" col-1 ">{horas}</div>
                <div scope="col" className=" col-1 ">{fecch}</div>
            </div> 
        </>
    )
}

export default elPosgrado