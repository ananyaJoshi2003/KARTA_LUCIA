import axios from 'axios';
import Constants from '../utilities/constants'; 

const baseURL = Constants.BASE_URL + '/admin/blog';

export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(baseURL, blogData);
    return response.data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

export const getBlogList = async ( ) => {
  try {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

export const deleteBlog = async ( blogId ) => {
  try {
    await axios.delete(`${baseURL}/${blogId}`);
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};
