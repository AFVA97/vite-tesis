import React from 'react'
import InfoNavBar from '../Info/infoNavBar'
import FormularioAsignaturas from './FormularioAsignaturas'
import FormularioCursos from './FormularioCursos'

const Gestionar = () => {
  return (
    <>
        <div className="sticky-top ">
            <InfoNavBar title={"Gestión"}/>
        </div>
        <div className="row text-center m-3">
            <FormularioAsignaturas />
            <FormularioCursos />
        </div>
    </>
  )
}

export default Gestionar
