import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'; 
import {getCursosRequest,createCursoRequest,deleteCursoRequest} from '../api/cursos'


export const FechaContext = createContext();


export const FechaProvider = ({children}) => {
  const [first, setfirst] = useState([])
    const [Cursos, setCursos] = useState([])
    const [year, setyear] = useState(new Date().getFullYear())
    const [globalData, setGlobalData] = useState(Cookies.get().globalData);
    const [globalData1, setGlobalData1] = useState(Cookies.get().globalData1);
    // useEffect(() => {
    //     const fechaActual = new Date();    
    //     const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    //     if(mes<=7){
    //         setyear(year-1)
    //     }
    //     if(!globalData)
    //         setGlobalData(year)
    // }, [])
    useEffect(() => {
      const load=async()=>{
        setfirst((await getCursosRequest()).data)
      };load()
      const fechaActual = new Date();    
        const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
        if(mes<=7){
            setyear(year-1)
        }
    }, [])
    useEffect(() => {
      setCursos(first)
    }, [first])
    

    useEffect(() => {
      if(Cursos.length==0){
        setGlobalData(0)
      }
      else{
        let ultimo=Cursos[0]
        for (let index = 1; index < Cursos.length; index++) {
            if(ultimo.comienzo<Cursos[index].comienzo)
                ultimo=Cursos[index]
        }
        setGlobalData(ultimo.comienzo)
        setGlobalData1(ultimo.finaliza)
      }
    }, [Cursos])
    
    

    useEffect(() => {
        Cookies.set('globalData',globalData)
        
    }, [globalData])
    useEffect(() => {
      Cookies.set('globalData1',globalData1)
      
  }, [globalData1])


    
    const createCurso=async(curso)=>{
      const res = await createCursoRequest(curso);
      if(res.status===200)
        setCursos([...Cursos,curso])
    }

    const deleteCurso = async (id) => {
      try {
        const res = await deleteCursoRequest(id);
        if (res.status === 204)setCursos(Cursos.filter((curso) => curso._id !== id));
      } catch (error) {
        console.log(error);
        setErrors(error.response.data);
      }
    };

    return (
        <FechaContext.Provider value={{ year,globalData, setGlobalData,globalData1,setGlobalData1,Cursos,createCurso,deleteCurso }}>
            {children}
        </FechaContext.Provider>
    );
};