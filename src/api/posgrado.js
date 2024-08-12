import axios from "./axios";


export const getPosgradosRequest=()=>axios.get(`/posgrado`)

export const getPosgradoProfRequest=(idProfesor)=>axios.get(`posgrado/prof/${idProfesor}`)

export const createPosgradoRequest =(Posgrado)=>axios.post(`/posgrado`,Posgrado);

export const getPosgradoRequest=(id)=>axios.get(`/posgrado/${id}`);

export const updatePosgradoRequest=(Posgrado)=>axios.put(`/posgrado/${Posgrado._id}`,Posgrado);

export const deletePosgradoRequest=(id)=>axios.delete(`/posgrado/${id}`);
