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
        <p className="alert-danger rounded text-center m-2 p-2 ">La Información mostrada en esta pantalla es compartida entre todas las Facultades, temga cuidado al eliminar Información</p>
        <div className="row text-center m-3">
            <FormularioAsignaturas />
            <FormularioPlanes />
        </div>
    </>
  )
}

export default Gestionar
