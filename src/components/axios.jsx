import axios from 'axios'


// const baseURL = 'http://127.0.0.1:8000/'

const isDevelopment = import.meta.env.MODE === 'development'
const baseURL = isDevelopment ? import.meta.env.VITE_API_BASE_URL_LOCAL : import.meta.env.VITE_API_BASE_URL_DEPLOY

const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 4000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default AxiosInstance