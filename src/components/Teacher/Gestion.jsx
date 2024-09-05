import React, { useEffect, useState } from 'react'
import {useProfesor} from "../../context/profesorContext"
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InfoNavBar from './layouts/infoNavBar';

const Gestion = ({user}) => {
    const {getProfesor,updatesProfesor} =useProfesor();
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const navigate=useNavigate()  
    const [profesor, setprofesor] = useState(null)

    useEffect(() => {
      const load=async()=>{
        setprofesor(await getProfesor(user.ciuser))
      }
      load()
    }, [])
    useEffect(() => {
      if(profesor!=null){
        setValue('trabajometo',profesor.trabajometo)
        setValue('trabajod',profesor.trabajod)
        setValue('trabajoc',profesor.trabajoc)
        setValue('trabajoec',profesor.trabajoec)
      }
    }, [profesor])
    
    

    const onSubmit=handleSubmit(async data=>{        
        try {
            console.log(data);
            
                await updatesProfesor({...profesor,trabajometo:data.trabajometo,trabajoc:data.trabajoc,trabajod:data.trabajod,trabajoec:data.trabajoec});
                navigate("/teacher/inicio")
            
        } catch (error) {
                console.log(error);
                
    }})
    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate("/teacher/inicio")
    }


    return (
    <>
        <InfoNavBar title={"Añadir Extensión Universitaria"} link={"/teacher/ext_univ"}/>
      <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>                
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="trabajometo">Trabajo Metodológico</label>
                        <input type="number" className="form-control" {...register("trabajometo", { required: true })}  id="trabajometo" placeholder="0" />
                        {errors.trabajometo && (
                            <p className="alert-danger rounded text-center mt-2"> Inserte, al menos el valor '0'</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="trabajoec">Trabajo Extracurricular</label>
                        <input type="number" {...register("trabajoec", { required: true })} className="form-control" id="trabajoec" placeholder="0" />
                        {errors.trabajoec && (
                            <p className="alert-danger rounded text-center mt-2"> Inserte, al menos el valor '0'</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="trabajoc">Trabajo de Curso</label>
                        <input type="number" className="form-control" {...register("trabajoc", { required: true })}  id="trabajoc"  placeholder="0"/>
                        {errors.trabajoc && (
                            <p className="alert-danger rounded text-center mt-2"> Inserte, al menos el valor '0'</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="trabajod">Trabajo de Diploma</label>
                        <input type="number" {...register("trabajod", { required: true })} className="form-control" id="trabajod" placeholder="0" />
                        {errors.trabajod && (
                            <p className="alert-danger rounded text-center mt-2"> Inserte, al menos el valor '0'</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <button type="submit" className="btn btn-success">Guardar</button>
                    </div>
                    <div className="form-group col-md-6 text-right">
                        <button type="button" onClick={e=>handleCancelar(e)} className="btn btn-secondary">Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Gestion
