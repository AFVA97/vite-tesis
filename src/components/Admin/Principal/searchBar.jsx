

function searchBar  ({handleInputChange,query,setQuery})  {
    return (
        <div className='row m-1 justify-content-around'>
            <div className='col-10'>
                <input
                type="text"
                value={query}
                className="w-100 form-control"
                onChange={e=>handleInputChange(e)}
                placeholder="Buscar por Nombre"
                />
            </div>
            <div className='col-2'>
                <button
                    className="btn m-1 btn-block btn-outline-primary"
                    onClick={()=>{setQuery('')}}
                >
                    Reset...
                </button>
            </div>
        </div>
    )
}
export default searchBar