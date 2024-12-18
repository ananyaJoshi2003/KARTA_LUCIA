const Joi = require('joi');
const { validateRequest } = require('./validationMiddleware');

const createTestimonialsSchema = Joi.object({
  client: Joi.string().required(),
  description: Joi.string().required(),
  logoUrl: Joi.string().required()
});

const validateCreateTestimonials = validateRequest(createTestimonialsSchema);

module.exports = {
  validateCreateTestimonials
};
