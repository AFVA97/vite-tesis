import { createContext, useContext, useEffect, useState } from "react";
import {
  createProfesorRequest,
  deleteProfesorRequest,
  getProfesoresRequest,
  getProfesorRequest,
  updateProfesorRequest
} from "../api/profesor";

const ProfesorContext = createContext();

export const useProfesor = () => {
  const context = useContext(ProfesorContext);
  if (!context) throw new Error("useProfesor must be used within a ProfesorProvider");
  return context;
};

export function ProfesorProvider({ children }) {
  const [Profesores, setProfesores] = useState([]);
  const [errors, setErrors] = useState([]);

  

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // useEffect(() => {
  //   const fetchData= async()=>{
  //     try {
  //       await getProfesores();
  //       console.log(Profesores);
        
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData(); 
  // }, [])

  const getProfesores = async () => {
    const res = await getProfesoresRequest();
    //console.log(res);
    if(res.status===200){
      setProfesores(res.data);
      //console.log(Profesores);
      //return res.data
      
    }
  };

  const createsProfesor = async (Profesor) => {
    try {
      const res = await createProfesorRequest(Profesor);
      if(res.status===200)
        setProfesores([...Profesores,Profesor])
      
        
      // }
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const updatesProfesor = async (Profesor) => {
    try {
      const res=await updateProfesorRequest( Profesor);
      setProfesores(Profesores.map(profesor=>(profesor._id===Profesor._id?res.data:profesor)))
   
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const deletesProfesor = async (id) => {
    try {
      const res = await deleteProfesorRequest(id);
      if (res.status === 204) setProfesores(Profesores.filter((Profesor) => Profesor._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  

  const getProfesor = async (_id) => {
    try {
      const res = await getProfesorRequest(_id); 
      
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  

  return (
    <ProfesorContext.Provider
      value={{
        Profesores,
        errors,
        
        
        getProfesores,
        createsProfesor,
        updatesProfesor,
        deletesProfesor,
        getProfesor,
        
        
      }}
    >
      {children}
    </ProfesorContext.Provider>
  );
}
