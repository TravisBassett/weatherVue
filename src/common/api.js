import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = '775c4f1bd67bac77a4edcfc3817c08da';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });