function titleLayout({id,isprofesor}){
    return(
        <div className="row bg-white">
            <div className="col-6">{id} nombre</div>
            {isprofesor && (
                <div className="col-6">
                    graduado de
                </div>
            )}
            
        </div>
    )
}
export default titleLayout