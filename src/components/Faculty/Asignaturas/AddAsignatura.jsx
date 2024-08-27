import { useEffect, useState } from "react"
import InfoNavBar from "../Add_Carrera/infoNavBar"
import { useForm } from "react-hook-form";
import {  useNavigate, useParams } from "react-router-dom";
import {useAsignatura} from '../../../context/asignaturaContext'
import { useNombreAsignatura } from "../../../context/nombreAsigContext";


const AddAsignatura = ({User}) => {
    const params=useParams();
    const{ createsAsignatura}=useAsignatura()
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const [semestre, setsemestre] = useState(true);
    const [exafinal, setexafinal] = useState(true);
    const navigate=useNavigate()
    const [error, seterror] = useState([])
    const [flag, setflag] = useState(false)

    const{NombreAsignaturas, getNombreAsignaturas, }=useNombreAsignatura()

    useEffect(() => {
        const load=async()=>{
            await getNombreAsignaturas();            
          };load();
          setValue('semestre',true) 
          setValue('exafinal',true) 
          setValue('nombre',"")
          setValue('tipocurso',"")
          setValue('anno',"")            
          setValue('carrera',params._id)
          setValue('profesor', null)
          setValue('notas',"")
          if(User.facuser)
            setValue('facultad',User.facuser)
    }, [])

    useEffect(() => {
        if(User.facuser)
            setValue('facultad',User.facuser)
    }, [User])
    
    
      const onSubmit=handleSubmit(async data=>{        
        try {  
            
            if(data.nombre=="" ){
                seterror(['Seleccione la Asignatura a Solicitar'])                
            }
            if(data.anno=="" ){
                seterror(['Seleccione el Año a Solicitar'])
                                
            }
            if(data.tipocurso==""){
                seterror(['Seleccione el Tipo de Curso a Solicitar'])
            }
            if(data.comienzo>data.finaliza){
                seterror(['El Curso debe tener la fecha final después de la fecha de inicio'])
            }
            if(data.nombre!="" && data.anno!="" && data.tipocurso!="" && data.comienzo<data.finaliza){
                createsAsignatura(data);
                navigate(`/faculty/modificar/${params._id}`)
            }
        } catch (errores) {
            seterror([...error,errores])
    }})
    
    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate(`/faculty/modificar/${params._id}`)
    }
    

    const handleOnChange=()=>{
        setsemestre(!semestre)
        
    }
    useEffect(() => {
        setValue('semestre',semestre)
    }, [semestre])
    
    const handleOnChanges=()=>{
        setexafinal(!exafinal)
        
    }
    useEffect(() => {
        setValue('exafinal',exafinal)
    }, [exafinal])
    
    useEffect(() => {
      if(error.length==0)
        setflag(true)
      else
        setflag(false)
    }, [error])
    

    useEffect(() => {
        if (error.length > 0) {
          const timer = setTimeout(() => {
            seterror([]);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [error]);
    
  return (
    <>
      <InfoNavBar title={"Añadir Asignatura"} link={`/faculty/modificar/${params._id}`}/>      
        <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar} className="m-4">
            <div className="row m-2">
                <div className="input-group mb-3  justify-content-center p-1 col">
                    <span className="input-group-text" id="basic-addon1">Asignatura</span>
                    <select 
                        className="form-select" 
                        name="nombre"
                        onChange={ e => setValue('nombre',e.target.value)}
                    >
                        <option value="" >Seleccione una Opción</option>
                        {NombreAsignaturas.map((asignatura)=>(
                            <option value={asignatura.nombre} key={asignatura._id}>{asignatura.nombre}</option>
                        ))}
                    </select>
                        
                </div>
                <div className="input-group mb-3 p-1  justify-content-center  col">
                    <span className="input-group-text" id="basic-addon1">Año</span>
                    <select 
                        className="form-select" 
                        onChange={ e => setValue('anno',e.target.value)}
                        name="anno"
                    >
                        <option value="" >Seleccione una Opción</option>
                        <option value="1" >1ro</option>
                        <option value="2" >2do</option>
                        <option value="3" >3ro</option>
                        <option value="4" >4to</option>
                        <option value="5" >5to</option>
                        
                    </select>
                        
                </div>
            </div>
            <div className="row  m-2 ">
                <div className="input-group mb-3 col">
                    <span className="input-group-text" id="basic-addon1">Cantidad de Grupos</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="#" 
                        name="cantgrupos"
                        {...register("cantgrupos", { required: true })}
                        
                    />
                    
                </div>
                <div className="input-group mb-3 col">
                    <span className="input-group-text" id="basic-addon1">Horas</span>
                    <input 
                        type="number" 
                        className="form-control"
                        name="horas" 
                        placeholder="#" 
                        {...register("horas", { required: true })}
                        
                    />
                    
                </div>
            </div>
            <div className="row">
                <div className="row col  m-2">
                    <div className="input-group mb-3 col-6">
                        <span className="input-group-text" id="basic-addon1">Frecuencia Semanal</span>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="#" 
                            name="frecuencia"
                            {...register("frecuencia", { required: true })}
                            
                        />
                        
                    </div>
                    
                    
                    
                </div>
                <div className="input-group col p-1 mb-3 justify-content-center">
                    <span className="input-group-text" id="basic-addon1">Tipo de Curso</span>
                    <select 
                        className="form-select" 
                        name="tipocurso"
                        onChange={ e => setValue('tipocurso',e.target.value)}
                    >
                        <option value="" >Seleccione una Opción</option>
                        <option value="CRD" >CRD</option>
                        <option value="CPT" >CPT</option>
                        <option value="CPE" >CPE</option>
                        
                    </select>
                        
                </div>
            </div>
            <div className="row mb-3 justify-content-around container-fluid ">

                                        
                    <div className="row col">
                        <span className="input-group-text col" id="basic-addon1">Semestre</span>
                        <div className="form-check col ml-1">
                            <input className="form-check-input " type="checkbox" value="Sí" id="fijosi" checked={semestre} onChange={handleOnChange}/>
                            <label className="form-check-label" htmlFor="fijosi">
                                1er
                            </label>

                        </div>
                        <div className="form-check col">
                            <input className="form-check-input " type="checkbox" value="No" id="fijono" checked={!semestre} onChange={handleOnChange}/>
                            <label className="form-check-label" htmlFor="fijono">
                                2do
                            </label>

                        </div>
                    </div>



                    <div className="row col">
                        <span className="input-group-text col" id="basic-addon1">Examen Final</span>
                        <div className="form-check col ml-1">
                            <input className="form-check-input " type="checkbox" value="Sí" id="cargosi" checked={exafinal} onChange={handleOnChanges}/>
                            <label className="form-check-label" htmlFor="cargosi">
                                Sí
                            </label>

                        </div>
                        <div className="form-check  col">
                            <input className="form-check-input " type="checkbox" value="No" id="cargono" checked={!exafinal} onChange={handleOnChanges}/>
                            <label className="form-check-label" htmlFor="cargono">
                                No
                            </label>

                        </div>
                    </div>

                </div>
            <div className="row">
                <span className="input-group-text col-2" id="basic-addon1">Curso</span>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <span className="input-group-text" id="basic-addon1">Empieza</span>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    placeholder="#" 
                                    name="comienzo"
                                    onSelect={e=>{setValue('comienzo',e.target.value)}}
                                    
                                    {...register("comienzo", { required: true })}
                                    
                                />
                                
                        </div>
                        <div className="col">
                            <span className="input-group-text" id="basic-addon1">Finaliza</span>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    placeholder="#" 
                                    name="finaliza"
                                    onSelect={e=>{setValue('finaliza',e.target.value)}}
                                    {...register("finaliza", { required: true })}
                                    
                                />
                                
                        </div>
                        </div>
                        <div className="row align-items-center">
                            {errors.comienzo ? (
                                <p className="alert alert-danger text-center col-6 "> Comienzo is required</p>
                            ):<div className="col-6"></div>}
                            {errors.finaliza && (
                                <p className="alert alert-danger text-center col-6"> Finaliza is required</p>
                            )}
                        </div>
                    </div>
                </div>
            
            <div >
                {errors.nombre && (
                    <p className="alert alert-danger text-center"> Nombre de la Asignatura is required</p>
                )}
                {errors.cantgrupos && (
                    <p className="alert alert-danger text-center"> Cantidad de Grupos is required</p>
                )}
                {errors.anno && (
                    <p className="alert alert-danger text-center"> Nombre de la Asignatura is required</p>
                )}
                {errors.horas && (
                    <p className="alert alert-danger text-center"> Horas is required</p>
                )}
                {errors.frecuencia && (
                    <p className="alert alert-danger text-center"> Frecuencia is required</p>
                )}
                {errors.tipocurso && (
                    <p className="alert alert-danger text-center"> Tipo de Curso is required</p>
                )}
                {error.length>0 && 
                    <>
                        {error.map((errores,i)=>(
                                <p key={i} className="alert alert-danger text-center"> {errores} </p>
                        ))}
                    </>
                }
                
            </div>
            
            <div className="fixed-bottom p-2 row bg-white bottom-0 end-0">
                <button type="submit" className="btn col btn-success  m-3">Guardar</button>
                <button  className="btn btn-danger col m-3" onClick={e=>handleCancelar(e)}>Cancelar</button>
            </div>
        </form>
    </>
  )
}

export default AddAsignatura
