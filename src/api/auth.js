import axios from "./axios";



export const loginRequest =user=>axios.post(`/login`,user);

export const registerRequest=(user)=>axios.post(`/register`,user);

export const verifyTokenRequest = async () => axios.get(`/verify`);

export const getUsersRequest=async ()=>axios.get(`/users`)

export const deleteUserRequest= async (id)=>axios.delete(`/users/${id}`)

export const getUserRequest= async (id)=>axios.get(`/users/${id}`)