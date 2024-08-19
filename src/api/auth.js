import axios from "./axios";



export const loginRequest =async user=>await axios.post(`/login`,user);

export const registerRequest=async(user)=>await axios.post(`/register`,user);

export const verifyTokenRequest = async () =>await  axios.get(`/verify`);

export const getUsersRequest=async ()=>await axios.get(`/users`)

export const deleteUserRequest= async (_id)=>await axios.delete(`/users/${_id}`)

export const getUserRequest= async (_id)=>await axios.get(`/users/${_id}`)

export const getUserCIRequest= async (_id)=>await axios.get(`/users/ci/${_id}`)

export const getProfileRequest=async()=>await axios.get(`/profile`)

export const getUserFACRequest= async (_id)=>await axios.get(`/users/fac/${_id}`)