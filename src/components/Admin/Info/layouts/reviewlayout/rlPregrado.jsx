

function rlPregrado({first, second, te, tm, th}) {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col">
                    <div className="row justify-content-center ">Imparte Docencia</div>
                    <div className="row justify-content-center text-center ">
                        <div className="col" >{first?(<input type="radio" readOnly disabled checked></input>): (<input type="radio" readOnly disabled ></input>)}</div>
                        <div className="col" >{second?(<input type="radio" readOnly disabled checked></input>): (<input type="radio" readOnly disabled ></input>)}</div>
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