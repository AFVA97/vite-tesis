import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'; 

// Crear el contexto
export const FechaContext = createContext();

// Crear un proveedor de contexto
export const FechaProvider = ({children}) => {
    const [year, setyear] = useState(new Date().getFullYear())
    const [globalData, setGlobalData] = useState(Cookies.get().globalData);
useEffect(() => {
    const fechaActual = new Date();    
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    if(mes<=7){
        setyear(year-1)
    }
    if(!globalData)
        setGlobalData(year)
}, [])
    useEffect(() => {
        Cookies.set('globalData',globalData)
    }, [globalData])
    

    return (
        <FechaContext.Provider value={{ year,globalData, setGlobalData }}>
            {children}
        </FechaContext.Provider>
    );
};