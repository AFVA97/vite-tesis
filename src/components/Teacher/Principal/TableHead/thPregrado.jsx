

function thInicio() {
       //semestre nombre carrera facultad tipode curso horas
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                
            <div scope="col" className=" col-2 text-truncate">Asignatura</div>
            <div scope="col" className=" col-3 text-truncate">Carrera</div>
            <div scope="col" className=" col-3 text-truncate">Facultad</div>
                <div scope="col" className=" col-2 text-center justify-content-center">
                    <div className="row justify-content-center text-center">Semestre</div>
                    <div className="row justify-content-center text-center text-truncate">
                        <div className="col justify-content-center text-center">1er</div>
                        <div className="col justify-content-center text-center">2do</div>
                    </div>
                </div>
                <div scope="col" className=" col-1 text-truncate">Tipo de Curso</div>
                <div scope="col" className=" col-1 text-truncate">Horas</div>
            </div>                
        </>
    )
  }
  
  export default thInicio