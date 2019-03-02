import axios from 'axios';
import 'babel-polyfill';

const baseUrl = 'http://localhost:3050';


export const getAllCars = async () => {
   
      const response = await axios.get(`${baseUrl}/api/cars`);
      return new Promise((resolve, _) => {
        const cars = response.data;
        resolve(cars);
      });
      
  };
  
  export const getCarById = async (id )=> {
   
      const response = await axios.get(`${baseUrl}/api/cars/${id}`);
      return new Promise((resolve, _) => {
        const car = response.data;
        resolve(car);
      });
     };
  
  export const addCar = async (car) => {

      const response = await axios.post(`${baseUrl}/api/cars/`, car);
      return new Promise((resolve, _) => {
        resolve(response.statusText);
      });
    
  };