import axios from "./axios";



export const loginRequest =user=>axios.post(`/login`,user);

export const registerRequest=(user)=>axios.post(`/register`,user);

export const verifyTokenRequest = async () => axios.get(`/verify`);

export const getUsersRequest=async ()=>axios.get(`/users`)

export const deleteUserRequest= async (_id)=>axios.delete(`/users/${_id}`)

export const getUserRequest= async (_id)=>axios.get(`/users/${_id}`)

export const getUserCIRequest= async (_id)=>axios.get(`/users/ci/${_id}`)

export const getProfileRequest=async()=>axios.get(`/profile`)

export const getUserFACRequest= async (_id)=>axios.get(`/users/fac/${_id}`)