import axios, { AxiosError, AxiosResponse } from 'axios';

// axios.defaults.baseURL = "https://localhost:7252/";
axios.defaults.baseURL = "https://www.jesusrenasce.com.br/api/rifa-api/public/v1"


const responseBody = (response : AxiosResponse) => response.data;
const responseBody2 = <T extends {}>(response : AxiosResponse<T>) => response.data;

const requests = {
    get: (url : string) => axios.get(url).then(responseBody),    
    post: (url : string, body : {}) => axios.post(url, body).then(responseBody),    
    put: (url : string, body : {}) => axios.put(url, body).then(responseBody),
    delete: (url : string) => axios.delete(url).then(responseBody),
} 

const FichaApi = { 
    createTicket: (ficha : {}) => requests.post('/createTicket', ficha),
    getQuantity: () => requests.get('/getQuantities'),
    getRandomTicket: () => requests.get('/getRandomTicket')      
}

export default {
    FichaApi
}