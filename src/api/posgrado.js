import axios from "./axios";


export const getPosgradosRequest=async()=>await axios.get(`/posgrado`)

export const createPosgradoRequest =async(Posgrado)=>await axios.post(`/posgrado`,Posgrado);

export const updatePosgradoRequest=async(Posgrado)=>await axios.put(`/posgrado/${Posgrado._id}`,Posgrado);

export const deletePosgradoRequest=async(id)=>await axios.delete(`/posgrado/${id}`);
