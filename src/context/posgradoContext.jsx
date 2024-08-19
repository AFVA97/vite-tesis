import { createContext, useContext, useEffect, useState } from "react";
import {
  getPosgradosRequest,
  deletePosgradoRequest,
  createPosgradoRequest,
  //getPosgradoRequest,
  //getPosgradoProfRequest,
  updatePosgradoRequest
} from "../api/posgrado";

const PosgradoContext = createContext();

export const usePosgrado = () => {
  const context = useContext(PosgradoContext);
  if (!context) throw new Error("usePosgrado must be used within a PosgradoProvider");
  return context;
};

export function PosgradoProvider({ children }) {
  const [Posgrados, setPosgrados] = useState([]);
  const [errors, setErrors] = useState([]);
  //const [PosProf, setPosProf] = useState([])

  

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
  //       await getPosgrados();
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData(); 
  // }, [])

  const getPosgrados = async () => {
    const res = await getPosgradosRequest();
    setPosgrados(res.data);
  };

  const createsPosgrado = async (Posgrado) => {
    try {
      const res = await createPosgradoRequest(Posgrado);
      if (res.status===200)
        setPosgrados([...Posgrados,res.data])
      // if(res.status===200)
      //   getPosgrados();
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const updatesPosgrado = async (Posgrado) => {
    try {
      const res=await updatePosgradoRequest( Posgrado);
      setPosgrados(Posgrados.map(posgrado=>(posgrado._id===Posgrado._id?res.data:posgrado)))
  
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const deletesPosgrado = async (id) => {
    try {
      const res = await deletePosgradoRequest(id);
      if(res.status===204)setPosgrados(Posgrados.filter((Posgrado) => Posgrado._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  // const getPosgradoProf = async (id) => {
  //   try {
  //     const res = await getPosgradoProfRequest(id); 
      
  //     setPosProf(res.data)
  //     return res.data;
  //   } catch (error) {
  //     console.error(error);
  //     setErrors(error.response.data);
  //   }
  // };
  

  // const getPosgrado = async (id) => {
  //   try {
  //     const res = await getPosgradoRequest(id); 
      
  //     return res.data;
  //   } catch (error) {
  //     console.error(error);
  //     setErrors(error.response.data);
  //   }
  // };

  

  return (
    <PosgradoContext.Provider
      value={{
        Posgrados,
        errors,
        getPosgrados,
        createsPosgrado,
        updatesPosgrado,
        deletesPosgrado,
        
        // PosProf,
        // getPosgrado,
        // getPosgradoProf,
        
      }}
    >
      {children}
    </PosgradoContext.Provider>
  );
}
