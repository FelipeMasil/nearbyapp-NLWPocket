import axios from "axios";

export const api = axios.create({
    baseURL: 'http://172.35.16.153:3333',
    timeout: 5000,
})