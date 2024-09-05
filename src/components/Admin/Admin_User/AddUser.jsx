import { useForm } from "react-hook-form"
import { useAuth } from "../../../context/authContext"
import InfoInicio from "../Info/infoNavBar"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useProfesor } from "../../../context/profesorContext"
import { useFacultad } from "../../../context/facultadContext"
import SearchBar from "./SearchBar"

const AddUser = () => {
    const params =useParams();
    const { users, getUser, getUsers, signup, deleteUser,}=useAuth()
    const { Profesores, getProfesores } = useProfesor();
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
    const navigate=useNavigate()    
    const {Facultades, getFacultades }=useFacultad()


    const [modificando, setmodificando] = useState(false)
    const [usuario, setUsuario] = useState(null)  
    const [active, setactive] = useState(true)
    const [tipoSelect, settipoSelect] = useState("")
    const [selectores, setselectores] = useState("")
    const [error, seterror] = useState([])
    let facultadfiltrad = []
    let profesorfiltrado = []
    
    
    const checkPassword=()=>{
        return (register.password===register.confirmacion)
    }
    
    const onSubmit=handleSubmit(async data=>{        
        try {
            if(!params._id){ 
                if(tipoSelect===""){
                    seterror(['Seleccione un Tipo de Usuario'])
                    return;
                }
                else if(tipoSelect!=="" && !data.ciuser && !data.facuser){
                    if(tipoSelect==="2")
                        seterror(['Seleccione un Profesor para este Usuario'])
                    else 
                        seterror(['Seleccione una Facultad para este Usuario'])
                    return;
                }
                else{
                    if(checkPassword()){
                        const userTemp=users.filter((temp)=>temp.username===data.username)
                        if(userTemp.length==0){
                            signup(data);
                            navigate("/admin/users")}
                        else{
                            seterror(['Nombre de Usuario en uso, rectifique su Información'])
                        }
                    }
                    else{seterror(['La Contrase;a y la Confirmación no Coinciden'])}
                }
            }
            else{
                if(checkPassword()){
                    await deleteUser(params._id);
                    await signup(data)
                    navigate("/admin/users")
                }
            }
        } catch (error) {
                
    }})

    const handleCancelar=(e)=>{
        e.preventDefault();
        navigate("/admin/users")
    }

    function handleSelectTipo(e){
        settipoSelect(e.target.value)
    }

    const handleSelect = (profesor) => {
        if(!modificando){
            if(tipoSelect==="2"){
                setValue('ciuser',profesor._id)
                setValue('facuser',null)
                return
            }
            else if(tipoSelect==="3"){
                setValue('ciuser',null)
                setValue('facuser',profesor._id)  
                            
                return
            }
            setValue('ciuser',null)
            setValue('facuser',null)
        }
    };
    
    useEffect(() => {
        if (error.length > 0) {
            const timer = setTimeout(() => {
            seterror([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    useEffect(() => {
        setValue('active',active)
    }, [active])

    useEffect(() => {
        async function loadUser() {
            await getProfesores();
            await getUsers();
            await getFacultades();
            if(params._id)
                setUsuario(await getUser(params._id))  
        };
        loadUser()
        setValue('active',active)
    }, [])
    
    useEffect(() => {
        if(usuario){
            setValue('_id',usuario._id)
            setValue('username',usuario.username)
            setValue('ciuser',usuario.ciuser)
            setValue('facuser',usuario.facuser)
            setValue('active',usuario.active)
            setactive(usuario.active)
            setValue('password',"")
            setValue('confirmacion',"")
            setmodificando(true)
            if(usuario.ciuser)
                settipoSelect("2")
            else if(usuario.facuser)
                settipoSelect("3")
            else
                settipoSelect("1")
        }
    }, [usuario])
    
    useEffect(() => {
        async function informacion() {
        if(tipoSelect==="1"|| tipoSelect===""){
            setValue('ciuser',null)
            setValue('facuser',null)
            setselectores(
                <div className="col">{""} </div>
            )
            return
        }
        else if(tipoSelect==="2"){
            if(Array.isArray(Profesores)){
                for (let index = 0; index < Profesores.length; index++) {
                    let flag=false;
                    for (let index2 = 0; index2 < users.length; index2++) {
                        if(users[index2].ciuser===Profesores[index]._id)
                            flag=true;                                
                    }
                    if(!flag)
                        profesorfiltrado.push(Profesores[index])
                }
            }
            setselectores(
                <>
                    {!modificando&& (<>
                        <label >Asignado a:</label>
                        <SearchBar Profesores={profesorfiltrado} onSelect={handleSelect} />
                    </>)}
                </>
            )
            if(profesorfiltrado[0])
                setValue('ciuser',profesorfiltrado[0]._id)
            return
        }
        else{
            if(Array.isArray(Facultades)){
                for (let index = 0; index < Facultades.length; index++) {
                    let flag=false;
                    for (let index2 = 0; index2 < users.length; index2++) {
                        if(users[index2].facuser===Facultades[index]._id)
                            flag=true;                                
                    }
                    if(!flag)
                        facultadfiltrad.push(Facultades[index])
                }
            }
            setselectores(
                <>
                    {!modificando && (<>
                        <label >Asignado a:</label>
                        <SearchBar Profesores={facultadfiltrad} onSelect={handleSelect} />
                    </>)}
                </>
            )
            if(facultadfiltrad[0])
                setValue('facuser',facultadfiltrad[0]._id)
            return
        }
        }informacion()
    }, [tipoSelect])
        
    
  return (
    <>
      <InfoInicio title={"Añadir Usuario"}/>
      <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)} onAbort={handleCancelar}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="username">Nombre de Usuario</label>
                        <input type="text" disabled={(params._id)?"disabled":""} className="form-control" {...register("username", { required: true })} id="username" placeholder="Nombre de Usuario" />
                        {errors.username && (
                            <p className="alert-danger rounded text-center mt-2"> El Nombre de Usuario es Requerido</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                            <label htmlFor="tipo">Tipo de Usuario</label>
                            <select 
                                className="form-select" 
                                onChange={e=>handleSelectTipo(e)}
                                id="tipo"
                                value={tipoSelect}
                                >
                                <option value="" >Seleccione una Opción</option>
                            <option value="1">Administrador</option>
                            <option value="2">Profesor</option>
                            <option value="3">Facultad</option>
                            </select>
                            {errors.tipo && (
                            <p className="alert-danger rounded text-center mt-2"> Tipo de Usuario es Requerido</p>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="activo">Activo</label>
                        <select 
                        className="form-select" 
                        id="activo"
                        onChange={ e => setValue('active',e.target.value)}
                        {...register("active", { required: true })}
                        >
                        <option value="" >Seleccione una Opción</option>
                        <option value="true" >Sí</option>
                        <option value="false" >No</option>
                        </select>                        
                        {errors.active && (
                                <p className="alert-danger rounded text-center mt-2"> Activo es Requerido</p>
                            )}
                    </div>
                    <div className="form-group col-md-6">
                            {selectores}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="form-control"  {...register("password", { required: true })} id="password" />
                        {errors.password && (
                            <p className="alert-danger rounded text-center mt-2"> Contraseña es Requerida</p>
                        )}
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="confirmacion">Confirmación de la Contraseña</label>
                        <input type="password" className="form-control"  {...register("confirmacion", { required: true })} id="confirmacion" />
                        {errors.confirmacion && (
                            <p className="alert-danger rounded text-center mt-2">Confirmación de la Contraseña es Requerida</p>
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

export default AddUser
