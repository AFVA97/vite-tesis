import axios from "./axios";


export const getAsignaturasRequest=()=>axios.get(`/asignatura`)

export const createAsignaturaRequest =(asignatura,carrera)=>axios.post(`/asignatura/${carrera._id}`,asignatura);

export const getAsignaturaRequest=(id)=>axios.get(`/asignatura/${id}`);

export const updateAsignaturaRequest=(asignatura)=>axios.put(`/asignatura/${asignatura._id}`,asignatura);

export const deleteAsignaturaRequest=(id)=>axios.delete(`/asignatura/${id}`);
