
import PropTypes from "prop-types"

function rlPregrado({first, second, te, tm, th}) {
       
    return (
        <>
            <div className="row justify-content-center text-center container-fluid bg-secondary text-white m-0 p-0">
                <div scope="col" className=" col-3">
                    <div>Imparte Docencia</div>
                    <div className="row justify-content-center text-center ">
                        <div>{first?(<input type="radio" readOnly disabled checked></input>): (<input type="radio" readOnly disabled ></input>)}</div>
                        <div>{second?(<input type="radio" readOnly disabled checked></input>): (<input type="radio" readOnly disabled ></input>)}</div>
                    </div>
                </div>
                <div scope="col" className=" col-3 ">Tutoria Estudiantes: {te}</div>
                <div scope="col" className=" col-3 ">Trabajo Metodológico: {tm}</div>
                <div scope="col" className=" col-3 ">Total de Horas: {th}</div> 
            </div>                
        </>
    )
  }


  rlPregrado.propTypes={
    first:PropTypes.bool, 
    second:PropTypes.bool, 
    te:PropTypes.number, 
    tm:PropTypes.number, 
    th:PropTypes.number
}
  
  export default rlPregrado