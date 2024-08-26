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
        } catch (error) {
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
            {error.length>0 ? (
                <>
                {error.map((errores,i)=>(
                        <p key={i} className="alert alert-danger text-center"> {errores} </p>
                    ))}
                </>
            ):<div></div>}  
            <div className="fixed-bottom p-2 row bottom-0 end-0">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={e=>handleCancelar(e)}>Cancelar</button>
            </div>
        </form>
    </>
  )
}

export default AddFacultad
