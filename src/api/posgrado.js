import axios from "./axios";


export const getPosgradoesRequest=()=>axios.get(`/posgrado`)

export const getPosgradoProfRequest=(idProfesor)=>axios.get(`posgrado/${idProfesor}`)

export const createPosgradoRequest =(Posgrado)=>axios.post(`/posgrado`,Posgrado);

export const getPosgradoRequest=(id)=>axios.get(`/posgrado/${id}`);

export const updatePosgradoRequest=(Posgrado)=>axios.put(`/posgrado/${Posgrado._id}`,Posgrado);

export const deletePosgradoRequest=(id)=>axios.delete(`/posgrado/${id}`);
