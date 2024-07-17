import { useForm } from '../../../hooks/useForm';


function searchBar  ({setsearch})  {
    
    
    const [ formValues, handleInputChange, reset, especific ] = useForm({
        searchText: ""
    });
    const { searchText } = formValues;
    
   
    const handleSearch = (e) => {
        e.preventDefault();
        setsearch(searchText);
    }

    return (
        <div className="row container-fluid">
            <form onSubmit={ handleSearch } >
                <div className='row'>
                    <div className='col-6'>
                        <input 
                        type="text"
                        placeholder="Buscar por Nombre"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={ searchText }
                        onChange={ handleInputChange }
                        />
                    </div>              
                    <div className='col-3'>
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </div>
                    <div className='col-3'>
                        <button
                            className="btn m-1 btn-block btn-outline-primary"
                            onClick={reset}
                        >
                            Reset...
                        </button>
                    </div>
                
                </div>
            </form>


        </div>


                
      
    )
}
export default searchBar