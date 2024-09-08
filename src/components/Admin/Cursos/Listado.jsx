import React, { useContext, useEffect, useState } from 'react'
import { FechaContext } from '../../../context/fechaContext'
import { useNavigate } from 'react-router-dom'

const Listado = () => {
    const {Cursos,deleteCurso}=useContext(FechaContext)
    
    const handleRemoveCurso =async (_id) => {
        await deleteCurso(_id)
    };
    

  return (
    <div className='col-md-6 m-2'>
        <h3>Cursos</h3>
       <ul className="list-group">
                {Cursos.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {(new Date(item.comienzo)).getFullYear()}-{(new Date(item.finaliza)).getFullYear()}
                        <button className="btn btn-secondary btn-sm" onClick={() => handleRemoveCurso(item._id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
                {Cursos.length==0 && <h3>No hay Cursos Añadidos</h3>}
            </ul>
    </div>
  )
}

export default Listado
