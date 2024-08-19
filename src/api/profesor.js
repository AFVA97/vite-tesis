import axios from "./axios";


export const getProfesoresRequest=async()=>await axios.get(`/profesor`);

export const getProfesorRequest=async(_id)=>await axios.get(`/profesor/${_id}`);

export const createProfesorRequest=async(profesor)=>await axios.post(`/profesor`,profesor);

export const updateProfesorRequest=async(profesor)=>await axios.put(`/profesor/${profesor._id}`,profesor);

export const deleteProfesorRequest=async(id)=>await axios.delete(`/profesor/${id}`);
