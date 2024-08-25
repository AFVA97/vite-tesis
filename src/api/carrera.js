import axios from "./axios";


export const getCarrerasRequest=async()=>await axios.get(`/carrera`)

export const createCarreraRequest =async(carrera)=>await axios.post(`/carrera`,carrera);

export const getCarreraRequest=async(id)=>await axios.get(`/carrera/${id}`);

export const updateCarreraRequest=async(carrera)=>await axios.put(`/carrera/${carrera._id}`,carrera);

export const deleteCarreraRequest=async(id)=>await axios.delete(`/carrera/${id}`);
