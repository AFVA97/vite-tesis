

function thInicio() {
       //semestre nombre carrera facultad tipode curso horas
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
            <div scope="col" className=" col-2  ">Asignatura</div>
            <div scope="col" className=" col-3  ">Carrera</div>
            <div scope="col" className=" col-3  ">Facultad</div>
            <div scope="col" className="col-2">
                <div>Semestre</div>
                <div className="row justify-content-center text-center  ">
                    <div className="col-6 justify-content-center text-center">1er</div>
                    <div className="col-6 justify-content-center text-center">2do</div>
                </div>
            </div>
                <div scope="col" className=" col-1  ">Tipo de Curso</div>
                <div scope="col" className=" col-1  ">Horas</div>
            </div>                
        </>
    )
  }
  
  export default thInicio