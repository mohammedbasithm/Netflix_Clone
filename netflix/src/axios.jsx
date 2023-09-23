import axios from 'axios'
import {baseUrl} from './Constants/Constans'

const instance = axios.create({
    baseURL: baseUrl,
  
  });
export default instance;