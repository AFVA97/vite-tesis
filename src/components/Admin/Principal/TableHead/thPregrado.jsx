

function thInicio() {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col-4 text-truncate">Nombre del Profesor</div>
                <div scope="col" className=" col-3">
                    <div>Imparte Docencia</div>
                    <div className="row justify-content-center text-center text-truncate">
                        <div className="col justify-content-center text-center">1er</div>
                        <div className="col justify-content-center text-center">2do</div>
                    </div>
                </div>
                <div scope="col" className=" col-1 text-truncate">Tutoria Estudiantes</div>
                <div scope="col" className=" col-1 text-truncate">Trabajo Metodológico</div>
                <div scope="col" className=" col-1 text-truncate">Total de Horas</div> 
            </div>                
        </>
    )
  }
  
  export default thInicio