import Header from '../Header_Teach'
import PosgradoLayout from '../layouts/PosgradoLayout'
import PregradoLayout from '../layouts/PregradoLayout'
import ExUnivLayout from '../layouts/ExUnivLayout'
import InvCientLayout from '../layouts/InvCientLayout'
import { useAuth } from '../../../context/authContext'
import { useEffect, useState } from 'react'
import { get } from 'mongoose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function inicio({user}) {
    const [desplegadoPre, setdesplegadoPre] = useState(true)
    const [desplegadoPos, setdesplegadoPos] = useState(true)
    const [desplegadoInv, setdesplegadoInv] = useState(true)
    const [desplegadoExt, setdesplegadoExt] = useState(true)
  
    return (
      <>
        <div className='sticky-top'>
          <Header username={user.username} _id={user.ciuser}/>
        </div>
        <div className="d-flex justify-content-between align-items-center border container-fluid  m-0 p-2" onClick={() => setdesplegadoPre(!desplegadoPre)}>
            <h6 className='mb-0'>Pregrado</h6>
            <FontAwesomeIcon icon={desplegadoPre ? faChevronUp : faChevronDown} />
        </div>
        {desplegadoPre && <PregradoLayout user={user}/>}
        <div className="d-flex justify-content-between align-items-center border container-fluid  m-0 p-2" onClick={() => setdesplegadoPos(!desplegadoPos)}>
            <h6 className='mb-0'>Posgrado</h6>
            <FontAwesomeIcon icon={desplegadoPos ? faChevronUp : faChevronDown} />
        </div>
        {desplegadoPos&& <PosgradoLayout user={user}/>}
        <div className="d-flex justify-content-between align-items-center border container-fluid  m-0 p-2" onClick={() => setdesplegadoInv(!desplegadoInv)}>
            <h6 className='mb-0'>Investigación Científica</h6>
            <FontAwesomeIcon icon={desplegadoInv ? faChevronUp : faChevronDown} />
        </div>
        {desplegadoInv&& <InvCientLayout user={user}/>}
        <div className="d-flex justify-content-between align-items-center border container-fluid  m-0 p-2" onClick={() => setdesplegadoExt(!desplegadoExt)}>
            <h6 className='mb-0'>Extensión Univeraitaria</h6>
            <FontAwesomeIcon icon={desplegadoExt ? faChevronUp : faChevronDown} />
        </div>
        {desplegadoExt&& <ExUnivLayout user={user}/>}
        
        
        {/* <div className='text-center'>
          <h3 >Posgrados</h3>
          <PosgradoLayout user={user}/>
        </div>
        <div className='text-center'>
          <h3 >Investigación Científica</h3>
          <InvCientLayout user={user}/>
        </div>
        <div className='text-center'>
          <h3 >Extensión Universitaria</h3>
          <ExUnivLayout user={user}/>
        </div> */}
      </>
    )
  }
  
  export default inicio