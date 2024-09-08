import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FechaContext } from '../../../context/fechaContext';

const Formulario = () => {
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const {createCurso}=useContext(FechaContext)
    const onSubmit=handleSubmit(async data=>{        
        try { 
            createCurso(data);
        } catch (errores) {
            console.log(errores);
    }})
    
  return (
    <div className='col-md-5 m-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row ">
                <label htmlFor="comienzo">Inicio del Curso</label>
                <input type="date" className="form-control" onSelect={e=>{setValue('comienzo',e.target.value)}} {...register("comienzo", { required: true })} id="comienzo" />
                {errors.comienzo && (
                    <p className="alert-danger rounded text-center mt-2"> Fecha de Comienzo del Curso es Requerida</p>
                )}
            </div>
            <div className="form-row ">
                <label htmlFor="finaliza">Cierre del Curso</label>
                <input type="date" className="form-control" onSelect={e=>{setValue('finaliza',e.target.value)}} {...register("finaliza", { required: true })} id="finaliza" />
                {errors.finaliza && (
                    <p className="alert-danger rounded text-center mt-2"> Fecha de Finalización del Curso es Requerida</p>
                )}
            </div>
            <div className="form-row m-3">
                    
                <button type="submit" className="btn btn-success">Guardar</button>
                    
                    
            </div>
        </form>
    </div>
  )
}

export default Formulario
