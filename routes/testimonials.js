const express = require('express');
const router = express.Router();
const TestimonialsController  = require('../controllers/testimonialsController');
const { validateCreateTestimonials } = require('../validations/testimonialsValidation');

// Create a Testimonials

router.post('/', validateCreateTestimonials, TestimonialsController.createTestimonials);

// Get a Testimonials
router.get('/', TestimonialsController.getTestimonials);

// Delete a Portfolio by ID
router.delete('/:id', TestimonialsController.deleteTestimonials);

module.exports = router;
