import { useEffect, useState } from "react"
import InfoInicio from "../Info/infoNavBar"
import { useForm } from "react-hook-form";
import { useFacultad } from "../../../context/facultadContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";


const AddFacultad = () => {
    const params=useParams();

    const {Facultades,
        errors:createError,
        getFacultads,
        deletesFacultad,
        createsFacultad,
        getFacultad,
        updatesFacultad} =useFacultad();

    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    
    const navigate=useNavigate();

    useEffect(() => {
        async function loadFacultad() {
            if(params._id){
                
                
                const facultad=await getFacultad(params._id);
                setValue('_id',facultad._id)
                setValue('nombre',facultad.nombre)
                setValue('abreviatura',facultad.abreviatura)
                
            }
        }
        loadFacultad()
    }, []);

    const onSubmit=handleSubmit(data=>{        
        try {
            if(!params._id){                
                createsFacultad(data);
                handleCancelar();
            }
            else{
                
                updatesFacultad(data);
                handleCancelar();
            }
        } catch (error) {
                
    }})
    
    const handleCancelar=()=>{
        navigate("/admin/facultad")
    }

  return (
    <>
      <InfoInicio title={"Añadir Facultad"}/>      
        <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
            <div className="row p-5">
                <div className="input-group mb-3 p-1 col-12">
                    <span className="input-group-text" id="basic-addon1">Nombre de la Facultad</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        {...register("nombre", { required: true })}
                    />
                    {errors.nombre && (
                        <p className="form-label"> El Nombre is required</p>
                    )}
                </div>
                <div className="input-group mb-3 col-6">
                    <span className="input-group-text" id="basic-addon1">Abreviatura</span>
                    <input 
                        type="text" 
                        className="form-control"
                        name="abreviatura"
                        {...register("abreviatura", { required: true })}
                    />
                    {errors.abreviatura && (
                        <p className="form-label"> Abreviatura is required</p>
                    )}
                </div>
                
            
                
                
                
            </div>
            <div className="fixed-bottom p-2 row bottom-0 end-0">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={handleCancelar}>Cancelar</button>
            </div>
        </form>
    </>
  )
}

export default AddFacultad