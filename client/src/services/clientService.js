import axios from 'axios';
import Constants from '../utilities/constants'; 

const baseURL = Constants.BASE_URL + '/client';

export const createClient = async (clientData) => {
  try {
    const response = await axios.post(baseURL, clientData);
    return response.data;
  } catch (error) {
    console.error('Error creating client:', error);
    throw error;
  }
};

export const getClient = async ( ) => {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching client:', error);
    throw error;
  }
};

export const deleteClient = async (portfolioId) => {
  try {
    await axios.delete(`${baseURL}/${portfolioId}`);
  } catch (error) {
    console.error('Error deleting portfolio:', error);
    throw error;
  }
};