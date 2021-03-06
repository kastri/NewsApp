import axios from 'axios';

const API_KEY = '10dd3b989ff14d89a4783453d65f7a9b'; //'43641db7e2b04ecdb8df074e324e4c67';
const BASE_URL = 'https://newsapi.org/v2/';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Bearer ' + API_KEY,
    Accept: 'application/json',
  },
});

export default client;
