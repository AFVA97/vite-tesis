import axios from "./axios";


export const getNombreAsignaturasRequest=async()=>await axios.get(`/nombreasignatura`)

export const createNombreAsignaturaRequest =async (NombreAsignatura)=>await axios.post(`/nombreasignatura`,NombreAsignatura);

export const getNombreAsignaturaRequest=async(id)=>await axios.get(`/nombreasignatura/${id}`);

export const updateNombreAsignaturaRequest=async(NombreAsignatura)=>await axios.put(`/nombreasignatura/${NombreAsignatura._id}`,NombreAsignatura);

export const deleteNombreAsignaturaRequest=async(id)=>await axios.delete(`/nombreasignatura/${id}`);
