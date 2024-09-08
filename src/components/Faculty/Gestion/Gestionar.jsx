import React from 'react'
import InfoNavBar from '../Info_Carrera/infoNavBar'
import FormularioAsignaturas from './FormularioAsignaturas'
import FormularioPlanes from './FormularioPlanes'

const Gestionar = () => {
  return (
    <>
        <div className="sticky-top ">
            <InfoNavBar title={"Gestión"}/>
        </div>
        <div className="row text-center m-3">
            <FormularioAsignaturas />
            <FormularioPlanes />
        </div>
    </>
  )
}

export default Gestionar
