import { useEffect, useState } from "react";

const SearchBar = ({  Profesores, onSelect}) => {
    
  
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
    };

    const handleSuggestionClick = (profesor) => {
      if(profesor){          
        if(profesor.apellidos){
          setQuery(`${profesor.nombre} ${profesor.apellidos}`);
          setFilteredSuggestions([]);
        }
        else{
          setQuery(`${profesor.nombre}`);
          setFilteredSuggestions([]);
        }
      }
      
      
      onSelect(profesor);
    };

    const objectList=(profesor)=>{
      if(profesor.apellidos)
        return `${profesor.nombre} ${profesor.apellidos}`
      return `${profesor.nombre}`
    }

  useEffect(() => {
    setQuery('');
    setFilteredSuggestions([]);    
  setFilteredSuggestions(Profesores)
  }, [,Profesores])


    return (
        <>
          <input
            type="text"
            value={query}
            className="w-100 form-control"
            onChange={handleInputChange}
            placeholder="Buscar..."
          />
          {filteredSuggestions.length > 0 && (
              <ul>
                  {filteredSuggestions.map((profesor) => (
                      <li key={profesor._id} onClick={() => handleSuggestionClick(profesor)}>
                          {objectList(profesor)}
                      </li>
                  ))}
              </ul>
          )}
      </>
    );
  };
  
  export default SearchBar;