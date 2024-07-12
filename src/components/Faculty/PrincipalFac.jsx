import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header_Fac"
import Inicio from "./Principal/inicioScreen"
import Login from "../login"


export default function App() {
  return (
    <>      
        <Header />
        <Routes>
          <Route exact path="/inicio" element={<Inicio/>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      
    </>
  )
}
