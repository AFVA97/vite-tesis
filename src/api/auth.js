import axios from "./axios";



export const loginRequest =user=>axios.post(`/login`,user);

export const registerRequest=(user)=>axios.post(`/register`,user);

export const verifyTokenRequest = async () => axios.get(`/verify`);