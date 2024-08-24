import Header from "../HeaderAdmin"
import ThFacultad from "./TableHead/thFacultad" 
import ElementFacultad from "./Elements/elementFacultad"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useFacultad } from "../../../context/facultadContext"
import { Link } from "react-router-dom"
import { useAsignatura } from "../../../context/asignaturaContext"

function Facultad({username}) {

  const {Facultades, getFacultades }=useFacultad()
  const { Asignaturas, getAsignaturas }=useAsignatura()
  const [facelement, setfacelement] = useState([])
  const [query, setQuery] = useState('');
  const [filteredFacultad, setFilteredFacultad] = useState([]);

  const handleInputChange = (e) => {
      const value = e.target.value;
      setQuery(value);
      setFilteredFacultad(
        facelement.filter((facultad) =>
          facultad.nombre.toLowerCase().includes(value.toLowerCase())
        )
      );
    };

    useEffect(() => {
      if(query==='')
        setFilteredFacultad(facelement)
    }, [query])
    
  useEffect(() => {
    const load =async()=>{
      await getFacultades();
      await getAsignaturas();
    };load()
  }, [])
  
  useEffect(()=>{
    if(Array.isArray(Facultades)){
      let facultadesArray=[];
      Facultades.map((facultad)=>{
          let aux={
            _id:facultad._id,nombre:facultad.nombre,ca:0, cg:0, cef:0, th:0
          }
          if(Array.isArray(Asignaturas)){
            let asignaturasFac=Asignaturas.filter((asignatura)=>asignatura.facultad===facultad._id)
            asignaturasFac.map((asignatura)=>{
              aux.ca+=1;
              aux.cg+=parseInt(asignatura.cantgrupos)
              if(asignatura.exafinal)
                aux.cef+=1
              aux.th+=parseInt(asignatura.horas)
          
            })
          }
          facultadesArray.push(aux)
      })
      setfacelement(facultadesArray);
      setFilteredFacultad(facelement)
    }
  },[Facultades,Asignaturas])

    return (
      <>
        <div className="sticky-top"> 
          <Header username={username}/>       
          <SearchBar 
            query={query}
            handleInputChange={handleInputChange}
            setQuery={setQuery}
          />
          <ThFacultad />
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {filteredFacultad.map((facultad,i)=>(
            <ElementFacultad 
              key={facultad._id} 
              {...facultad}
            />
          ))}
        </div>
        <Link 
          className="navbar-brand" 
          to="/admin/addfacultad"
        >
          <button className="floatingbutton btn btn-primary"
            >Agregar
          </button>
        </Link>
      </>
    )
  }
  
  export default Facultad