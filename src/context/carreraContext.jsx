import { createContext, useContext, useEffect, useState } from "react";
import {
    getCarrerasRequest,
    createCarreraRequest,
    //getCarreraRequest,
    //getCarreraProfRequest,
    updateCarreraRequest,
    deleteCarreraRequest
} from "../api/carrera";

const CarreraContext = createContext();

export const useCarrera = () => {
  const context = useContext(CarreraContext);
  if (!context) throw new Error("useCarrera must be used within a CarreraProvider");
  return context;
};

export function CarreraProvider({ children }) {
  const [Carreras, setCarreras] = useState([]);
  const [errors, setErrors] = useState([]);
  //const [CarreraFac, setCarreraFac] = useState([])

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const fetchData= async()=>{
      try {
        await getCarreras();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); 
  }, [])

  const getCarreras = async () => {
    const res = await getCarrerasRequest();
    setCarreras(res.data);
  };

  

  const createsCarrera = async (Carrera) => {
    try {
      const res = await createCarreraRequest(Carrera);
      if(res.status===200)setCarreras([...Carreras,res.data]);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const updatesCarrera = async (Carrera) => {
    try {
      const res=await updateCarreraRequest( Carrera);
      setAsignaturas(Carreras.map(carrera=>(carrera._id===Carrera._id?res.data:carrera)))
    
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const deletesCarrera = async (id) => {
    try {
      const res = await deleteCarreraRequest(id);
      if(res.status===204)setCarreras(Carreras.filter((Carrera) => Carrera._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  // const getCarreraProf = async (id) => {
  //   try {
  //     const res = await getCarreraProfRequest(id); 
  //     setCarreraFac(res.data)
  //     console.log(res.data);      
  //     return res.data;
  //   } catch (error) {
  //     console.error(error);
  //     setErrors(error.response.data);
  //   }
  // };
  

  // const getCarrera = async (id) => {
  //   try {
  //     const res = await getCarreraRequest(id); 
      
  //     return res.data;
  //   } catch (error) {
  //     console.error(error);
  //     setErrors(error.response.data);
  //   }
  // };

  

  return (
    <CarreraContext.Provider
      value={{
        Carreras,
        errors,
        getCarreras,
        createsCarrera,
        updatesCarrera,
        deletesCarrera,
        
        // CarreraFac,
        
        // getCarrera,
        // getCarreraProf,
        
      }}
    >
      {children}
    </CarreraContext.Provider>
  );
}
