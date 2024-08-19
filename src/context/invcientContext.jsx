import { createContext, useContext, useEffect, useState } from "react";
import {
  getInvCientesRequest,
  deleteInvCientRequest,
  createInvCientRequest,
  //getInvCientRequest,
  //getInvCientProfRequest,
  updateInvCientRequest
} from "../api/invcient";

const InvCientContext = createContext();

export const useInvCient = () => {
  const context = useContext(InvCientContext);
  if (!context) throw new Error("useInvCient must be used within a InvCientProvider");
  return context;
};

export function InvCientProvider({ children }) {
  const [InvCients, setInvCients] = useState([]);
  const [errors, setErrors] = useState([]);
  //const [InvProf,setInvProf]=useState([])




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
        await getInvCients();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); 
  }, [])

  const getInvCients = async () => {
    const res = await getInvCientesRequest();
    setInvCients(res.data);
  };

  

  const createsInvCient = async (InvCient) => {
    try {
      const res = await createInvCientRequest(InvCient);
      if(res.status===200)
        setInvCients([...InvCients,res.data])
      // if(res.status===200)
      //   getInvCients();
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const updatesInvCient = async (InvCient) => {
    try {
      const res= await updateInvCientRequest( InvCient);
      setInvCients(InvCients.map(investigacion=>(investigacion._id===InvCient._id?res.data:investigacion)))
    } catch (error) {
      console.error(error);
      setErrors(error.response.data);
    }
  };

  const deletesInvCient = async (id) => {
    try {
      const res = await deleteInvCientRequest(id);
      if(res.status===204)setInvCients(InvCients.filter((InvCient) => InvCient._id !== id));
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  // const getInvCientProf = async (id) => {
  //   try {
  //     const res = await getInvCientProfRequest(id); 
  //     setInvProf(res.data)
  //     return res.data;
  //   } catch (error) {
  //     console.error(error);
  //     setErrors(error.response.data);
  //   }
  // };
  

  // const getInvCient = async (id) => {
  //   try {
  //     const res = await getInvCientRequest(id); 
      
  //     return res.data;
  //   } catch (error) {
  //     console.error(error);
  //     setErrors(error.response.data);
  //   }
  // };

  

  return (
    <InvCientContext.Provider
      value={{
        InvCients,
        errors,        
        getInvCients,
        createsInvCient,
        updatesInvCient,
        deletesInvCient,
        
        // getInvCient,
        // InvProf,
        // getInvCientProf,
        
      }}
    >
      {children}
    </InvCientContext.Provider>
  );
}
