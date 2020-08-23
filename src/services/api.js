import axios from 'axios';

const api = axios.create({
    baseURL: 'https://viagemreserve.herokuapp.com/'
})

export default api;