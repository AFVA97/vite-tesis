
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  createBrowserRouter, Route, RouterProvider,
  Routes
} from "react-router-dom";
import Login from "./components/login"
import Admin from "./components/Admin/PrincipalAdmin"
import Faculty from "./components/Faculty/PrincipalFac"
import Teacher from "./components/Teacher/PrincipalTeach"
import ErrorPage from './components/error-page';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import { ProfesorProvider } from './context/profesorContext';
import { FacultadProvider } from './context/facultadContext';
import { AsignaturaProvider } from './context/asignaturaContext';
import { PosgradoProvider } from './context/posgradoContext';
import { ExtUnivProvider } from './context/extunivContext';
import { InvCientProvider } from './context/invcientContext';
import { CarreraProvider } from './context/carreraContext';
import { NombreAsignaturaProvider } from './context/nombreAsigContext';
import { TipoCursoProvider } from './context/tipoCursoContext';
import { FechaProvider } from './context/fechaContext';
import { PlanProvider } from './context/planesContext';

function App() {
  return (
    <>
      <FechaProvider>
        <AuthProvider>
          <ProfesorProvider>
            <FacultadProvider>  
              <AsignaturaProvider>
                <PosgradoProvider>
                  <ExtUnivProvider>
                    <InvCientProvider>
                      <CarreraProvider>
                        <NombreAsignaturaProvider>
                          <TipoCursoProvider>
                            <PlanProvider>
                              <BrowserRouter>
                                <Routes>
                                  <Route path='/' element={<Login/>} errorElement={<ErrorPage/>}/>
                                  <Route path='/login' element={<Login/>} errorElement={<ErrorPage/>}/>
                                  <Route element={<ProtectedRoute/>}>
                                    <Route path='/admin/*' element={<Admin/>} errorElement={<ErrorPage/>}/>
                                    <Route path='/faculty/*' element={<Faculty/>} errorElement={<ErrorPage/>}/>
                                    <Route path='/teacher/*' element={<Teacher/>} errorElement={<ErrorPage/>}/>
                                  </Route>
                                </Routes>
                              </BrowserRouter>
                            </PlanProvider>
                          </TipoCursoProvider>
                        </NombreAsignaturaProvider>
                      </CarreraProvider>
                    </InvCientProvider>
                  </ExtUnivProvider>
                </PosgradoProvider>
              </AsignaturaProvider>
            </FacultadProvider>
          </ProfesorProvider>
        </AuthProvider>
      </FechaProvider>
    </>
  )
}

export default App
