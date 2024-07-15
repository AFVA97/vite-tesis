function layoutPosgrado(){
    return(
        <>
            <h1>Posgrado</h1>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col-3 text-truncate">Nombre del Posgrado</div>
                <div scope="col" className=" col-1 text-truncate">Impartido o Recibido</div>
                <div scope="col" className=" col-3 text-truncate">Modalidad</div>
                <div scope="col" className=" col-3 text-truncate">Ubicación</div> 
                <div scope="col" className=" col-1 text-truncate">Cantidad de Cuadros</div>
                <div scope="col" className=" col-1 text-truncate">Horas</div>
            </div>   
        </>
    )
}
export default layoutPosgrado