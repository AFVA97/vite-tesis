import React, { useEffect, useState } from 'react'
import {useAsignatura} from '../../../context/asignaturaContext'
import { useParams } from 'react-router-dom'
import InfoNavBar from '../layouts/infoNavBar'
import {Container,Card, Row,Col} from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const InfoPre = () => {
    const {getAsignatura,updatesAsignatura}=useAsignatura()
    const params=useParams();
    const [asignatura,setasignatura]=useState({})
    const [loaded, setloaded] = useState(false)
    const{register,handleSubmit, formState:{errors}, setValue}=useForm();
   
    useEffect(() => {
      const load=async()=>{
        setasignatura(await getAsignatura(params._id))
      };load()
    }, [])
    
    useEffect(() => {
      if(asignatura.nombre){
        setloaded(true)
        setValue('tutoriaaa',asignatura.tutoriaaa)
      }
    }, [asignatura])
    const onSubmit=handleSubmit(async data=>{        
      try {
          await updatesAsignatura({...asignatura,tutoriaaa:data.tutoriaaa})
          setasignatura(await getAsignatura(params._id))
      } catch (errores) {
          
  }})
  const handleCancelar=(e)=>{
    e.preventDefault();
    navigate("/teacher/pregrado")
}

    const DataCard = ({ data }) => {
        return (
            <Card className="mb-3 text-center mw-100">
                <Card.Body>
                    <Card.Title>Carrera: {data.carrera.nombre}</Card.Title>
                    <Card.Text>
                        <strong>Año:</strong> {data.anno}<br />
                        <strong>Cantidad de Grupos:</strong> {data.cantgrupos}<br />
                        <strong>Horas:</strong> {data.horas}<br />
                        <strong>Tutoría a Alumnos Ayudantes:</strong> {data.tutoriaaa}<br />
                        <strong>Tipo de Curso:</strong> {data.tipoCurso}<br />
                        <strong>Frecuencia Semanal:</strong> {data.frecuencia}<br />
                        <strong>Semestre:</strong> {data.semestre?"1ro":"2do"}<br />
                        <strong>Tiene Examen Final:</strong> {data.exafinal ? 'Sí' : 'No'}<br />
                        <strong>Facultad:</strong> {data.facultad.nombre}<br />
                        <strong>Notas:</strong> {data.notas}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    };


    
    
  return (
    <>
        <InfoNavBar title={`Información de Asignatura - ${loaded && (asignatura.nombre)}`} link={"/teacher/pregrado"}/>
        {loaded && (
            <>
                <Container fluid className=" mw-100 justify-content-around">
                    <h1 className="my-4 text-center">Información del Curso</h1>
                      <DataCard data={asignatura} />
                </Container>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="tutoriaaa">Tutoría a Alumnos Ayudantes</label>
                                <input type="number" className="form-control" {...register("tutoriaaa")} id="tutoriaaa" placeholder="Tutoría a Alumnos Ayudantes" />
                                
                                
                            </div>
                            
                        </div>
                        
                        
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <button type="submit" className="btn btn-success">Modificar</button>
                            </div>
                            <div className="form-group col-md-6 text-right">
                                <button type="button" onClick={e=>handleCancelar(e)} className="btn btn-secondary">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>   
            </>
        )}
    </>
  )
}

export default InfoPre
