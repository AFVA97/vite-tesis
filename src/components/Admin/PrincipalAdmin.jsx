import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./HeaderAdmin"
import Inicio from "./Principal/inicioScreen"
import Facultad from "./Principal/facultadScreen"
import Pregrado from "./Principal/pregradoScreen"
import Posgrado from "./Principal/posgradoScreen"
import Investigacion from "./Principal/invCientScreen"
import Extension from "./Principal/extUnivScreen"
import InfoScreen  from "./Info/infoScreen"


export default function App() {
  
  return (
    <>
      
        
        <Routes>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/facultad" element={<Facultad />} />
          <Route path="/pregrado" element={<Pregrado />} />
          <Route path="/posgrado" element={<Posgrado />} />
          <Route path="/inv_cient" element={<Investigacion />} />
          <Route path="/ext_univ" element={<Extension />} />          
          <Route path="/inicio/info/:id" element={<InfoScreen title={"General"}/>} />
          <Route path="/facultad/info/:id" element={<InfoScreen title={"Facultad"}/>} />
          <Route path="/pregrado/info/:id" element={<InfoScreen title={"Pregrado"}/>} />
          <Route path="/posgrado/info/:id" element={<InfoScreen title={"Posgrado"}/>} />
          <Route path="/inv_cient/info/:id" element={<InfoScreen title={"Investigación Científica"}/>} />
          <Route path="/ext_univ/info/:id" element={<InfoScreen title={"Extensión Universitaria"}/>} />
        </Routes>
      
    </>
  )
}
