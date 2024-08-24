import { useEffect, useState } from "react";

const SearchBar = ({  Profesores, onSelect}) => {
    
  useEffect(() => {
    
        setQuery('');
        setFilteredSuggestions([]);      
    
      setFilteredSuggestions(Profesores)
   
    
  }, [,Profesores])
  
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
          return <li key={profesor._id} onClick={() => handleSuggestionClick(profesor)}>
                  {profesor.nombre} {profesor.apellidos}
                  </li>
        else 
        return <li key={profesor._id} onClick={() => handleSuggestionClick(profesor)}>
        {profesor.nombre}
        </li>
      }
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
          <ul >
            {filteredSuggestions.map((profesor, index) => (
              <>
                {objectList(profesor)}
              </>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default SearchBar;