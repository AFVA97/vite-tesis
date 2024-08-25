import React, { useEffect, useState } from 'react'
import {useAsignatura} from '../../../context/asignaturaContext'
import { useParams } from 'react-router-dom'
import InfoNavBar from '../layouts/infoNavBar'
import {Container,Card, Row,Col} from 'react-bootstrap'

const InfoPre = () => {
    const {getAsignatura}=useAsignatura()
    const params=useParams();
    const [asignatura,setasignatura]=useState({})
    const [loaded, setloaded] = useState(false)
    useEffect(() => {
      const load=async()=>{
        setasignatura(await getAsignatura(params._id))
      };load()
    }, [])
    
    useEffect(() => {
      if(asignatura.nombre){
        setloaded(true)
      }
    }, [asignatura])
    

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
                <Container fluid className="vh-100 mw-100 justify-content-around">
                    <h1 className="my-4 text-center">Información del Curso</h1>
                    
                                <DataCard data={asignatura} />
                          
                </Container>
            
        
                
                
                
            </>
        )}
    </>
  )
}

export default InfoPre
