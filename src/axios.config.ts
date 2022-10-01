import axios, { AxiosDefaults } from 'axios';
import envConfig from './env-config';

const axiosConfig: AxiosDefaults = {
  baseURL: envConfig.baseUrl as string,
  proxy:{
    host: envConfig.proxyHost as string,
    port: envConfig.proxyPort as number
  },
  headers: axios.defaults.headers
};

export default axiosConfig;