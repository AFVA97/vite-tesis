import { useEffect, useState } from "react"
import InfoNavBar from "./infoNavBar"
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
    const{NombreAsignaturas, getNombreAsignaturas, }=useNombreAsignatura()

    useEffect(() => {
        const load=async()=>{
            await getNombreAsignaturas();            
          };load();
          setValue('semestre',true) 
          setValue('exafinal',true)             
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
    
    
      const onSubmit=handleSubmit(data=>{        
        try {
             //console.log(data);
                
            createsAsignatura(data);
            navigate(`/faculty/modificar/${params._id}`)
            
        } catch (error) {
                
    }})
    
    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate(`/faculty/modificar/${params._id}`)
    }
    

    const handleOnChange=()=>{
        setsemestre(!semestre)
        setValue('semestre',semestre)
    }
    const handleOnChanges=()=>{
        setexafinal(!exafinal)
        setValue('exafinal',exafinal)
    }

    // const [comienzo, setcomienzo] = useState("")
    //     const [finaliza, setfinaliza] = useState("")
    // useEffect(() => {
    //     setValue('comienzo',comienzo)
    //     console.log(comienzo);
    // }, [comienzo])
    // useEffect(() => {
    //     setValue('finaliza',finaliza)
    //     console.log(finaliza);
    // }, [finaliza])
        
        
    
    // function handleFinaliza(e){
    //     setValue('finaliza',e.target.value)
    //     console.log(e.target.value);
    // }
    
  return (
    <>
      <InfoNavBar title={"Añadir Asignatura"} link={`/faculty/modificar/${params._id}`}/>      
        <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar} className="m-4">
            <div className="row m-2">
                <div className="input-group mb-3  justify-content-center p-1 col">
                    <span className="input-group-text" id="basic-addon1">Asignatura</span>
                    <select 
                        className="form-select" 
                        onChange={ e => setValue('nombre',e.target.value)}
                    >
                        <option value="" >Seleccione una Opción</option>
                        {NombreAsignaturas.map((asignatura)=>(
                            <option value={asignatura.nombre} key={asignatura._id}>{asignatura.nombre}</option>
                        ))}
                    </select>
                        {errors.nombre && (
                            <p className="form-label"> Nombre de la Asignatura is required</p>
                        )}
                </div>
                <div className="input-group mb-3 p-1  justify-content-center  col">
                    <span className="input-group-text" id="basic-addon1">Año</span>
                    <select 
                        className="form-select" 
                        onChange={ e => setValue('anno',e.target.value)}
                    >
                        <option value="" >Seleccione una Opción</option>
                        <option value="1" >1ro</option>
                        <option value="2" >2do</option>
                        <option value="3" >3ro</option>
                        <option value="4" >4to</option>
                        <option value="5" >5to</option>
                        
                    </select>
                        {errors.anno && (
                            <p className="form-label"> Nombre de la Asignatura is required</p>
                        )}
                </div>
            </div>
            <div className="row  m-2 ">
                <div className="input-group mb-3 col">
                    <span className="input-group-text" id="basic-addon1">Cantidad de Grupos</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="#" 
                        {...register("cantgrupos", { required: true })}
                        
                    />
                    {errors.cantgrupos && (
                        <p className="form-label"> Cantidad de Grupos is required</p>
                    )}
                </div>
                <div className="input-group mb-3 col">
                    <span className="input-group-text" id="basic-addon1">Horas</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="#" 
                        {...register("horas", { required: true })}
                        
                    />
                    {errors.horas && (
                        <p className="form-label"> Horas is required</p>
                    )}
                </div>
            </div>
            <div className="row  m-2">
                <div className="input-group mb-3 col">
                    <span className="input-group-text" id="basic-addon1">Frecuencia Semanal</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="#" 
                        {...register("frecuencia", { required: true })}
                        
                    />
                    {errors.frecuencia && (
                        <p className="form-label"> Frecuencia is required</p>
                    )}
                </div>
                
                <div className="input-group mb-3 col">
                    <span className="input-group-text" id="basic-addon1">Tutoría a Alumnos Ayudantes</span>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="#" 
                        aria-label="NumeroID" 
                        name="idUniversidad"
                        {...register("tutoriaaa", { required: true })}
                        
                    />
                    {errors.tutoriaaa && (
                        <p className="form-label"> Tutoria a Alumnos Ayudantes is required</p>
                    )}
                </div>
            </div>
            <div className="input-group  p-1 mb-3 justify-content-center">
                <span className="input-group-text" id="basic-addon1">Tipo de Curso</span>
                <select 
                    className="form-select" 
                    onChange={ e => setValue('tipocurso',e.target.value)}
                >
                    <option value="" >Seleccione una Opción</option>
                    <option value="CRD" >CRD</option>
                    <option value="CPT" >CPT</option>
                    <option value="CPE" >CPE</option>
                    
                </select>
                    {errors.tipocurso && (
                        <p className="form-label"> Tipo de Curso is required</p>
                    )}
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
                <span className="input-group-text col" id="basic-addon1">Curso</span>
                <div className="col">
                    <span className="input-group-text" id="basic-addon1">Empieza</span>
                        <input 
                            type="date" 
                            className="form-control" 
                            placeholder="#" 
                            onSelect={e=>{setValue('comienzo',e.target.value)}}
                            
                            {...register("comienzo", { required: true })}
                            
                        />
                        {errors.comienzo && (
                            <p className="form-label"> Comienzo is required</p>
                        )}
                </div>
                <div className="col">
                    <span className="input-group-text" id="basic-addon1">Finaliza</span>
                        <input 
                            type="date" 
                            className="form-control" 
                            placeholder="#" 
                            onSelect={e=>{setValue('finaliza',e.target.value)}}
                            {...register("finaliza", { required: true })}
                            
                        />
                        {errors.finaliza && (
                            <p className="form-label"> Finaliza is required</p>
                        )}
                </div>
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
