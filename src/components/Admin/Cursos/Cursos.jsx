import React from 'react'
import InfoNavBar from '../Info/infoNavBar'
import Formulario from './Formulario'
import Listado from './Listado'

const Gestionar = () => {
  return (
    <>
        <div className="sticky-top ">
            <InfoNavBar title={"Cursos"}/>
        </div>
        <div className="row text-center">
            <Formulario />
            <Listado />
        </div>
    </>
  )
}

export default Gestionar