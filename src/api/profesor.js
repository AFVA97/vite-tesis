import axios from "./axios";


export const getProfesoresRequest=()=>axios.get(`/profesor`);

export const getProfesorRequest=(id)=>axios.get(`/profesor/${id}`);

export const createProfesorRequest=(profesor)=>axios.post(`/profesor`,profesor);

export const updateProfesorRequest=(profesor)=>axios.put(`/profesor/${profesor._id}`,profesor);

export const deleteProfesorRequest=(id)=>axios.delete(`/profesor/${id}`);
