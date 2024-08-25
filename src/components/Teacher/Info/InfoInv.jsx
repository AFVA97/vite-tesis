import React, { useEffect, useState } from 'react'
import {useInvCient} from '../../../context/invcientContext'
import { Link, useParams } from 'react-router-dom'
import InfoNavBar from '../layouts/infoNavBar'
import {Container,Card, Row,Col} from 'react-bootstrap'

const InfoInv = () => {

  const {getInvCient}=useInvCient()
    const params=useParams();
    const [investigacion,setinvestigacion]=useState({})
    const [loaded, setloaded] = useState(false)
    useEffect(() => {
      const load=async()=>{
        setinvestigacion(await getInvCient(params._id))
      };load()
    }, [])
    
    useEffect(() => {
      if(investigacion.titulo){
        setloaded(true)
      }
    }, [investigacion])
    
    

    const select=()=>{
      if(investigacion.tipo){
        switch (investigacion.tipo) {
          case "Proyecto":
              return (
                <Card.Text>
                  <strong>Programa: </strong> {investigacion.descripcion}<br />
                  <strong>Alcance: </strong> {investigacion.alcance}<br />
                  <strong>Programa Asociado: </strong> {investigacion.issbnn}
                </Card.Text>
              )             
          case "Publicación Artículo":
            return (
              <Card.Text>
                <strong>Descripcion: </strong> {investigacion.descripcion}<br />
                <strong>Grupo: </strong> {investigacion.alcance}<br />
                <strong>ISSN: </strong> {investigacion.issbnn}<br />
                <strong>Autor(es): </strong> {investigacion.autores}<br />
                <strong>Link: </strong> <Link to={investigacion.link}>{investigacion.link}</Link>
              </Card.Text>
            )
          case "Publicación Libro o Capítulo":
            return (
              <Card.Text>
                <strong>Descripcion: </strong> {investigacion.descripcion}<br />
                <strong>ISBN: </strong> {investigacion.issbnn}<br />
                <strong>Link: </strong> <Link to={investigacion.link}>{investigacion.link}</Link>
              </Card.Text>
            )              
          case "Premio ACC":
            return (
              <Card.Text>
                <strong>Descripcion: </strong> {investigacion.descripcion}<br />
                <strong>Autor(es): </strong> {investigacion.autores}
              </Card.Text>
            )
              
          case "Premio BTJ":
            return (
              <Card.Text>
                <strong>Descripcion: </strong> {investigacion.descripcion}<br />
                <strong>Autor(es): </strong> {investigacion.autores}
              </Card.Text>
            )
              
          case "Otro Premio":
            return (
              <Card.Text>
                <strong>Descripcion: </strong> {investigacion.descripcion}<br />
                <strong>Alcance: </strong> {investigacion.alcance}
              </Card.Text>
            )              
          case "Red Académica":
            return (
              <Card.Text>
                <strong>Descripcion: </strong> {investigacion.descripcion}
              </Card.Text>
            )              
          case "Fórum":
            return (
              <Card.Text>
                <strong>Descripcion: </strong> {investigacion.descripcion}<br />
                <strong>Alcance: </strong> {investigacion.alcance}
              </Card.Text>
            )
              
          case "Participación en Evento":
            return (
              <Card.Text>
                <strong>Descripcion: </strong> {investigacion.descripcion}<br />
                <strong>Alcance: </strong> {investigacion.alcance}<br />
                <strong>Presencial: </strong> {investigacion.issbnn?"Sí":"No"}<br />
                <strong>Ponente: </strong> {investigacion.autores}
              </Card.Text>
            )
          case "Otro":
            return (
              <Card.Text>
                <strong>Descripcion: </strong> {investigacion.descripcion}
              </Card.Text>
            )
          default:
              return ""
        }
        }
      
    }

    const DataCard = ({ data }) => {
        return (
            <Card className="mb-3 text-center mw-100">
                <Card.Body>
                    <Card.Title>Título: {data.titulo}</Card.Title>
                    
                        {select()}
                        
                    
                </Card.Body>
            </Card>
        );
    };
    
  return (
    <>
      <InfoNavBar title={`Información de Investigación Científica - ${loaded && (investigacion.titulo)}`} link={"/teacher/inv_cient"}/>
        {loaded && (
            <>
                <Container fluid className="vh-100 mw-100 justify-content-around">
                    
                    
                                <DataCard data={investigacion} />
                          
                </Container>
            
        
                
                
                
            </>
        )}
    </>
  )
}

export default InfoInv
