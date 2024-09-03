import { useEffect, useState } from "react"
import InfoInicio from "../Info/infoNavBar"
import { useForm } from "react-hook-form";
import { useFacultad } from "../../../context/facultadContext";
import { useNavigate, useParams } from "react-router-dom";


const AddFacultad = () => {
    const params=useParams();
    const {Facultades, getFacultades, createsFacultad, getFacultad, updatesFacultad} =useFacultad();
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();    
    const navigate=useNavigate();
    const [error, seterror] = useState([])

    const onSubmit=handleSubmit(data=>{        
        try {
            if(!params._id){   
                const factemp=Facultades.filter((facultad)=>facultad.nombre==data.nombre)
                if(factemp.length==0){
                    createsFacultad(data);
                    navigate("/admin/facultad")
                }
                else{
                    seterror(['Nombre de Facultad en uso, rectifique su Información'])
                }
            }
            else{
                updatesFacultad(data);
                navigate("/admin/facultad")
            }
        } catch (errores) {
            error.push(errores.message)
    }})
    
    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate("/admin/facultad")
    }

    useEffect(() => {
        if(errors.length>0)
          seterror([...error,...errors])
      }, [errors])

    useEffect(() => {
        async function loadFacultad() {
            await getFacultades();
            if(params._id){
                const facultad=await getFacultad(params._id);
                setValue('_id',facultad._id)
                setValue('nombre',facultad.nombre)
                setValue('abreviatura',facultad.abreviatura)
            }
        }
        loadFacultad()
    }, []);

    

  return (
    <>
      <InfoInicio title={"Añadir Facultad"}/>   
      <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="nombre">Nombre de la Facultad</label>
                        <input type="text" className="form-control" {...register("nombre", { required: true })} id="titulo" placeholder="Nombre de la Facultad" />
                        {errors.nombre && (
                            <p className="alert-danger rounded text-center mt-2"> El Nombre de la Facultad es Requerido</p>
                        )}
                        {error.length>0 && (
                            <p className="alert-danger rounded text-center mt-2"> Este Nombre de Facultad ya está en uso, Verifique su Información</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="abreviatura">Abreviatura</label>
                        <input type="text" className="form-control" {...register("abreviatura", { required: true })} id="abreviatura" />
                        {errors.abreviatura && (
                            <p className="alert-danger rounded text-center mt-2"> Abreviatura es Requerida</p>
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

export default AddFacultad
