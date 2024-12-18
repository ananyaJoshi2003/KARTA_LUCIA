const Testimonials = require('../models/testimonials');
const { sendSuccessResponse, sendFailureResponse } = require('../helpers/responseHelper');

// Create a new Testimonials
const createTestimonials = async (req, res) => {
  try {
    const { client, description, logoUrl } = req.body;

    const testimonials = new Testimonials({ client, description, logoUrl });
    await testimonials.save();

    return sendSuccessResponse(res, 'Testimonials created successfully', testimonials, 201);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Get all Testimonials 
const getTestimonials = async (req, res) => {
  try {

    const testimonials = await Testimonials.find().sort({ createdAt: -1 }).exec();
    return sendSuccessResponse(res, 'Testimonials retrieved successfully', testimonials);
 
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Delete a product by ID
const deleteTestimonials = async (req, res) => {
  try {
    const testimonialsId = req.params.id;

    // Find the product by ID and remove it
    const testimonials = await Testimonials.findByIdAndRemove(testimonialsId);

    if (!testimonials) {
      return sendFailureResponse(res, 'Testimonials not found', 404);
    }

    return sendSuccessResponse(res, 'Testimonials deleted successfully');
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

module.exports = {
  createTestimonials,
  getTestimonials,
  deleteTestimonials
};
