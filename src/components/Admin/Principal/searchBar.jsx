

function searchBar  ({handleInputChange,query,setQuery})  {
    return (
        <div className='row m-1  justify-content-around bg-color'>
            <div className='col-10 m-1'>
                <input
                type="text"
                value={query}
                className="w-100 form-control"
                onChange={e=>handleInputChange(e)}
                placeholder="Buscar por Nombre"
                />
            </div>
            <div className='col'>
                <button
                    className="btn m-1 btn-block btn-outline-secondary"
                    onClick={()=>{setQuery('')}}
                >
                    Reset...
                </button>
            </div>
        </div>
    )
}
export default searchBar