import ElementInicio from "../Elements/elementInicio"

function th_inicio() {
    const propsi={
        id:1,nombre:"Name", apellidos:"Last", graduado:"graduado", hpre:5, hpos:6, hic:7, heu:8, th:9}
        
    return (
        <>
            <table className="table table-bordered  container">
                <thead>
                    <tr className="row justify-content-center text-center">
                        <th scope="col" className="col-4">Nombre del Profesor</th>
                        <th scope="col" className="col-3">Graduado de</th>
                        <th scope="col" className="col-1">Horas Pregrado</th>
                        <th scope="col" className="col-1">Horas Posgrado</th>
                        <th scope="col" className="col-1">Horas Invest. Cient.</th>
                        <th scope="col" className="col-1">Horas Ext. Univ</th>
                        <th scope="col" className="col-1">Total de Horas</th> 
                    </tr>
                </thead>
            </table>
            <div className="container-fluid justify-content-center">
                <ElementInicio 
                    key={propsi.id} 
                    {...propsi}/>
                
                
            </div>
        </>
    )
  }
  
  export default th_inicio