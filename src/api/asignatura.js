import axios from "./axios";


export const getAsignaturasRequest=async()=>await axios.get(`/asignatura`)

export const createAsignaturaRequest =async (asignatura)=>await axios.post(`/asignatura`,asignatura);

export const getAsignaturaRequest=async(id)=>await axios.get(`/asignatura/${id}`);

//export const getAsignaturaProfRequest=async(id)=>await axios.get(`/asignatura/prof/${id}`);

//export const getAsignaturaFacRequest=async(_id)=>await axios.get(`/asignatura/fac/${_id}`);

export const updateAsignaturaRequest=async(asignatura)=>await axios.put(`/asignatura/${asignatura._id}`,asignatura);

export const deleteAsignaturaRequest=async(id)=>await axios.delete(`/asignatura/${id}`);
