import { useEffect,useState } from "react"
import InfoNavBar from "../layouts/infoNavBar"
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { usePosgrado } from "../../../context/posgradoContext";



const AddPosgrado = () => {
    const {user,getProfile}=useAuth()
    const params=useParams();
    const { createsPosgrado, getPosgrado, }=usePosgrado()
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const navigate=useNavigate()
    const [impartido, setimpartido] = useState(true)
  
    const onSubmit=handleSubmit(data=>{        
        try {
                if(!params._id){  
                    createsPosgrado(data);
                    navigate("/teacher/posgrado")
                }
                else{
                    updatesInvCient(data);
                    navigate("/teacher/posgrado")
                }
        } catch (error) {
            console.log(error);
    }})

    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate("/teacher/posgrado")
    }

    useEffect(() => {
        async function loadPosgrado() {
            getProfile();
        if(params._id){
            const posgrado=await getPosgrado(params._id);
            setValue('_id',posgrado._id)
            setValue('fecha',new Date(posgrado.fecha).toISOString().slice(0, 10))
            setValue('nombre',posgrado.nombre)
            setValue('impartido',posgrado.impartido)
            settipoSelect(posgrado.modalidad)
            setValue('cantcuadros',posgrado.cantcuadros)
            setValue('ubicacion',posgrado.ubicacion)
            setValue('horas',posgrado.horas)
        }
        else
            setValue('impartido',impartido)
        }loadPosgrado()
    }, [])

    useEffect(() => {
        if(user!=null){
            setValue('profesor',user.ciuser)
        }
    }, [user])
  
    useEffect(() => {
    setValue('impartido',impartido)
    }, [impartido])

  
   
    return (
    <>
      <InfoNavBar
        title={"Añadir Posgrado"}
        link={"/teacher/posgrado"}/>
        <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="nombrePosgrado">Nombre del Posgrado</label>
                        <input type="text" className="form-control" {...register("nombre", { required: true })} id="nombrePosgrado" placeholder="Nombre del Posgrado" />
                        {errors.nombre && (
                            <p className="alert-danger rounded text-center mt-2"> Nombre del Posgrado es Requerido</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="modalidadPosgrado">Modalidad de Posgrado</label>
                        <select className="form-control" 
                            id="modalidadPosgrado"
                            onChange={ e => {setValue('modalidad',e.target.value)}}
                            {...register("modalidad", { required: true })}
                            >
                        <option value="" >Seleccione una Opción</option>
                        <option value="Curso">Curso</option>
                        <option value="Diplomado">Diplomado</option>
                        <option value="Especialidad">Especialidad</option>
                        <option value="Entrenamiento">Entrenamiento</option>
                        <option value="Maestría">Maestría</option>
                        <option value="Doctorado">Doctorado</option>
                        </select>
                        {errors.modalidad && (
                            <p className="alert-danger rounded text-center mt-2"> Modalidad es Requerida</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" className="form-control" onSelect={e=>{setValue('fecha',e.target.value);}} {...register("fecha", { required: true })} id="fecha" />
                        {errors.fecha && (
                            <p className="alert-danger rounded text-center mt-2"> Fecha es Requerida</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="cantidadCuadros">Cantidad de Cuadros</label>
                        <input type="number" className="form-control" {...register("cantcuadros", { required: true })} id="cantidadCuadros" placeholder="Cantidad de Cuadros" />
                        {errors.cantcuadros && (
                            <p className="alert-danger rounded text-center mt-2"> Cantidad de Cuadros es Requerido</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="horas">Horas</label>
                        <input type="number" {...register("horas", { required: true })} className="form-control" id="horas" placeholder="Horas" />
                        {errors.horas && (
                            <p className="alert-danger rounded text-center mt-2"> Horas es Requerido</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                        <label>Impartido</label>
                        <div className="form-row ml-3">
                            <div className="form-check col-md-3" onClick={()=>setimpartido(!impartido)}>
                                <input className="form-check-input" type="checkbox" checked={impartido} onChange={()=>{}} id="impartidoSi" />
                                <label className="form-check-label" htmlFor="impartidoSi">
                                    Sí
                                </label>
                            </div>
                            <div className="form-check col-md-3" onClick={()=>setimpartido(!impartido)}>
                                <input className="form-check-input" type="checkbox" checked={!impartido } onChange={()=>{}} id="impartidoNo" />
                                <label className="form-check-label" htmlFor="impartidoNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="ubicacion">Ubicación</label>
                        <textarea className="form-control" id="ubicacion" {...register("ubicacion")} rows="3" placeholder="Ubicación"></textarea>
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

export default AddPosgrado
