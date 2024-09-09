import React, { useContext, useEffect, useState } from "react"
import {useForm} from 'react-hook-form'
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom"

function login() {
    
  const{register,handleSubmit, formState:{errors}}=useForm();
  const {signin, errors:signinErrors,isAuthenticated,user}=useAuth();
  const navigate=useNavigate();

  const onSubmit=handleSubmit(data=>{
    signin(data);
  })
  
  useEffect(()=>{
    if(isAuthenticated){
      if(user.ciuser) 
        navigate('/teacher/inicio')
      else if(user.facuser)
        navigate('/faculty/inicio')
      else
      navigate('/admin/inicio') 
    }
  },[isAuthenticated])
    
    return (
      <>
      <div className="container d-flex justify-content-center align-items-center"  style={{height: '100vh'}}>
        
        <div className="card login bg-white" >
            <div className="card-header bg-secondary text-white">
                Bienvenido al Balance de Carga Docente
            </div>
            {signinErrors.length>0 &&
                  <p className="alert-danger rounded text-center mt-2"> {signinErrors[0]}</p>
                }
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  label="Escribe tu Usuario"
                  className="form-control mb-3"
                  name="username"
                  placeholder="Nombre de Usuario"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <p className="alert-danger rounded text-center mt-2"> El Nombre de Usuario es Requerido</p>
                )}
                <input
                  type="password"
                  name="password"
                  className="form-control mb-3"
                  placeholder="Contraseña"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                  <p className="alert-danger rounded text-center mt-2"> La Contraseña es Requerida</p>
                )}
                <button type="submit" className="btn btn-success mb-3">Login</button>
              </form>
            </div>
        </div>
    </div>
      <div className="container card mt-3 d-flex p-6  justify-content-center">
          <div className="mb-3 card-body">
          </div>
      </div> 
      </>
    )
  }
  
  export default login