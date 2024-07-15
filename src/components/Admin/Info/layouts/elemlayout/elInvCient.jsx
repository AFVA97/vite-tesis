import PropTypes from "prop-types"


function elInvCient({ti,titulo,alcance,horas}){
    return(
        <>
            <div className="row justify-content-center text-center container-fluid  m-0 p-0">
                <div scope="col" className=" col-5 text-truncate">{ti}</div>
                <div scope="col" className=" col-5 text-truncate">{titulo}</div>
                <div scope="col" className=" col-1 text-truncate">{alcance?(<p>nacional</p>):(<p>internacional</p>)}</div>
                <div scope="col" className=" col-1 text-truncate">{horas}</div> 
            </div>
        </>
    )
}

elInvCient.propTypes={
    ti:PropTypes.string,
    titulo:PropTypes.string,
    alcance:PropTypes.bool,
    horas:PropTypes.number
}

export default elInvCient