import { useEffect, useState } from "react";

const SearchBar = ({  Profesores, onSelect, prof}) => {
    
  useEffect(() => {
    if(prof){      
      const temp=Profesores.filter((profesor)=>profesor._id===prof)
      setQuery(`${temp[0].nombre} ${temp[0].apellidos}`)
      setFilteredSuggestions([])
    }
    else{
      setFilteredSuggestions(Profesores)
    }
    
  }, [,prof])
  
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  
    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        setFilteredSuggestions(
          Profesores.filter((profesor) =>
            profesor.nombre.toLowerCase().includes(value.toLowerCase())
          )
        );
        if(value===''){
          handleSuggestionClick(null)
        }
      };
  
      const handleSuggestionClick = (profesor) => {
        if(profesor){          
          setQuery(`${profesor.nombre} ${profesor.apellidos}`);
          setFilteredSuggestions([]);
        }
        onSelect(profesor);
      };
    return (
        <div>
        <input
          type="text"
          value={query}
          className="w-100"
          onChange={handleInputChange}
          placeholder="Buscar..."
        />
        {filteredSuggestions.length > 0 && (
          <ul key={23423423423434}>
            {filteredSuggestions.map((profesor, index) => (
              <li key={index} onClick={() => handleSuggestionClick(profesor)}>
                {profesor.nombre} {profesor.apellidos}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default SearchBar;