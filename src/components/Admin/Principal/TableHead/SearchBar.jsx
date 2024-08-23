import { useState } from "react";

const SearchBar = ({  Profesores, onSelect }) => {
    
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
        setQuery(profesor.nombre);
        setFilteredSuggestions([]);
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