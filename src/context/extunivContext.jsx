import { createContext, useContext, useEffect, useState } from "react";
import {
  getExtesRequest,
  deleteExtRequest,
  createExtRequest,
  getExtRequest,
 // getExtProfRequest,
  updateExtRequest
} from "../api/extuniv";

const ExtUnivContext = createContext();

export const useExtUniv = () => {
  const context = useContext(ExtUnivContext);
  if (!context) throw new Error("useExtUniv must be used within a ExtUnivProvider");
  return context;
};



export function ExtUnivProvider({ children }) {
  const [ExtUnivs, setExtUnivs] = useState([]);
  const [errors, setErrors] = useState([]);
  // const [ExtProf, setExtProf] = useState([])

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
  //       await getExtUnivs();
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData(); 
  // }, [])
  



  const getExtUnivs = async () => {
    const res = await getExtesRequest();
    setExtUnivs(res.data);
  };

  
  const createsExtUniv = async (ExtUniv) => {
    try {
      const res = await createExtRequest(ExtUniv);
      if(res.status===200)setExtUnivs([...ExtUnivs,res.data])
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };


  const updatesExtUniv = async (ExtUniv) => {
    try {
      const res=await updateExtRequest( ExtUniv);
      setExtUnivs(ExtUnivs.map(extension=>(extension._id===ExtUniv._id?res.data:extension)))
   
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const deletesExtUniv = async (id) => {
    try {
      const res = await deleteExtRequest(id);
      if(res.status===204)setExtUnivs(ExtUnivs.filter((ExtUniv) => ExtUniv._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  // const getExtUnivProf = async (id) => {
  //   try {
  //     const res = await getExtProfRequest(id); 
  //     setExtProf(res.data)
  //     console.log(res.data);      
  //     return res.data;
  //   } catch (error) {
  //     console.error(error);
  //     setErrors(error.response.data);
  //   }
  // };
  

  const getExtUniv = async (id) => {
    try {
      const res = await getExtRequest(id); 
      
      return res.data;
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  

  return (
    <ExtUnivContext.Provider
      value={{
        ExtUnivs,
        errors,
        getExtUnivs,
        createsExtUniv,
        updatesExtUniv,
        deletesExtUniv,
        
        // ExtProf,
        
        getExtUniv,
        // getExtUnivProf,
        
      }}
    >
      {children}
    </ExtUnivContext.Provider>
  );
}
