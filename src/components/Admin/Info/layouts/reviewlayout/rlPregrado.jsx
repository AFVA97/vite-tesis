

function rlPregrado({first, second, te, tm, th}) {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-1">
                <div scope="col" className=" col">
                    <div className="row justify-content-center ">Imparte Docencia</div>
                    <div className="tabs-container">
                        <div className={`tab ${first ? 'active' : ''}`}></div>
                        <div className={`tab ${second ? 'active' : ''}`}></div>
                    </div>
                </div>
                <div scope="col" className=" col ">Tutoria Estudiantes: {te}</div>
                <div scope="col" className=" col ">Trabajo Metodológico: {tm}</div>
                <div scope="col" className=" col ">Total de Horas: {th}</div> 
            </div>                
        </>
    )
  }

  
  export default rlPregrado