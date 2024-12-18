// portfolioService.js
import axios from 'axios';
import Constants from '../utilities/constants'; // Importing your Constants file

const baseURL = Constants.BASE_URL + '/portfolio'; // Assuming your API endpoint is '/api/portfolio'

export const createPortfolio = async (portfolioData) => {
  try {
    const response = await axios.post(baseURL, portfolioData);
    return response.data;
  } catch (error) {
    console.error('Error creating portfolio:', error);
    throw error;
  }
};

export const getPortfolioByIdOrAll = async (portfolioId) => {
  try {
    if (portfolioId) {
      const response = await axios.get(`${baseURL}?portfolioId=${portfolioId}`);
      return response.data;
    } else {
      const response = await axios.get(`${baseURL}`);
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    throw error;
  }
};

export const getPortfolioById = async ( portfolioId ) => {
  try {
    const response = await axios.get(`${baseURL}/${portfolioId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    throw error;
  }
};

export const getPortfolioByListNameLogo = async ( ) => {
  try {
    const response = await axios.get(`${baseURL}/listNameLogo`);
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    throw error;
  }
};

export const deletePortfolio = async (portfolioId) => {
  try {
    await axios.delete(`${baseURL}/${portfolioId}`);
  } catch (error) {
    console.error('Error deleting portfolio:', error);
    throw error;
  }
};

export const updatePortfolio = async (portfolioId, portfolioData) => {
  try {
    await axios.put(`${baseURL}/${portfolioId}`, portfolioData);
  } catch (error) {
    console.error('Error update portfolio:', error);
    throw error;
  }
};


export const createContact = async ( createContact ) => {
  try {
    const response = await axios.post(`${baseURL}/contact`, createContact);
    return response.data;
  } catch (error) {
    console.error('Error creating portfolio:', error);
    throw error;
  }
};

export const getContact = async ( ) => {
  try {
    const response = await axios.get(`${baseURL}/contact`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Contact:', error);
    throw error;
  }
};