import ThInvCient from "./TableHead/thInvCient"
import Header from "../HeaderAdmin"
import ElementInvCient from "./Elements/elementInvCient"
import SearchBar from "./searchBar"
import { useEffect, useState } from "react"
import 'animate.css';
import { useInvCient } from "../../../context/invcientContext"
import { useProfesor } from "../../../context/profesorContext"

function InvCient({username}) {

  const { Profesores, getProfesores } = useProfesor();
  const {InvCients, getInvCients }=useInvCient()
  const [profesores,setprofesores]=useState([])
  const [query, setQuery] = useState('');
  const [filteredProfesor, setFilteredProfesor] = useState([]);

  const handleInputChange = (e) => {
      const value = e.target.value;
      setQuery(value);
      setFilteredProfesor(
        profesores.filter((profesor) =>
          profesor.nombre.toLowerCase().includes(value.toLowerCase())
        )
      );
    };

    useEffect(() => {
      if(query==='')
        setFilteredProfesor(profesores)
    }, [query])
  
  useEffect(() => {
    const load=async () => {
      await getProfesores();
      await getInvCients()
    };load()  
  }, [])

  useEffect(()=>{
    let profesoresArray=[];
    if(Array.isArray(Profesores)){
      Profesores.map((profesor)=>{
        let aux={_id:profesor._id,nombre:profesor.nombre, apellidos:profesor.apellidos, proyecto:0, premios:0, publicaciones:0,otros:0}
        if(Array.isArray(InvCients)){
          let invcientProf=InvCients.filter((invcient)=>invcient.profesor===profesor._id)
          invcientProf.map((inves)=>{
                if(inves.tipo==="Proyecto"){aux.proyecto+=1}
                else if(inves.tipo==="Publicación Artículo"||inves.tipo==="Publicación Libro o Capítulo"){aux.publicaciones+=1}
                else if(inves.tipo==="Premio ACC"||inves.tipo==="Premio BTJ"||inves.tipo==="Otro Premio"){aux.premios+=1}
                else{aux.otros+=1}
              })
            }
            profesoresArray.push(aux)
      })
    }
    setprofesores(profesoresArray)
    setFilteredProfesor(profesores)
  },[Profesores,InvCients])

  
    return (
      <>
        <div className="sticky-top"> 
          <Header username={username}/>    
          <SearchBar 
            query={query}
            handleInputChange={handleInputChange}
            setQuery={setQuery}
          />  
          <ThInvCient />
        </div>
        <div className="container-fluid justify-content-center animate__animated animate__fadeIn">
          {filteredProfesor.map((profesor,i)=>(
            <ElementInvCient 
            key={profesor._id} 
            {...profesor}
          />
          ))}
        </div>
      </>
    )
  }
  
  export default InvCient