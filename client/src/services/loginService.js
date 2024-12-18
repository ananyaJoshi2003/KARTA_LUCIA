import axios from 'axios';
import Constants from '../utilities/constants'; 

const baseAdminURL = Constants.BASE_URL + '/admin';

export const loginAdmin = async ( loginData ) => {
  try {
    const response = await axios.post(`${baseAdminURL}/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Error updating plan:', error);
  }
};