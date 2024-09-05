import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const ThFacultad = ({carrera,onclick,desplegado}) => {
  return (
    <div className="d-flex justify-content-between align-items-center container-fluid bg-secondary text-white m-0 p-2" onClick={() => onclick()}>
      <h6 className='mb-0'>{carrera}</h6>
      <FontAwesomeIcon icon={desplegado ? faChevronUp : faChevronDown} />
    </div>
    
    // <>
    //   <div className="justify-content-center row text-center container-fluid bg-secondary text-white m-0 p-0" onClick={()=>onclick()}>
    //     <h6 >Carrera: {carrera}</h6>
    //     <FontAwesomeIcon  icon={desplegado ? faChevronUp : faChevronDown} />
    //   </div>
    // </>
  )
}

export default ThFacultad
