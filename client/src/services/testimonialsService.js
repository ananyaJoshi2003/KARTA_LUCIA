import axios from 'axios';
import Constants from '../utilities/constants'; 

const baseURL = Constants.BASE_URL + '/testimonials';

export const createTestimonials = async (testimonialsData) => {
  try {
    const response = await axios.post(baseURL, testimonialsData);
    return response.data;
  } catch (error) {
    console.error('Error creating testimonials:', error);
    throw error;
  }
};

export const getTestimonials = async ( ) => {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

export const deleteTestimonials = async ( testimonialsId ) => {
  try {
    await axios.delete(`${baseURL}/${testimonialsId}`);
  } catch (error) {
    console.error('Error deleting testimonials:', error);
    throw error;
  }
};
