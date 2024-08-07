import axios from "./axios";


export const getCarrerasRequest=()=>axios.get(`/carrera`)

export const createCarreraRequest =(carrera)=>axios.post(`/carrera`,carrera);

export const getCarreraRequest=(id)=>axios.get(`/carrera/${id}`);

export const updateCarreraRequest=(carrera)=>axios.put(`/carrera/${carrera._id}`,carrera);

export const deleteCarreraRequest=(id)=>axios.delete(`/carrera/${id}`);
