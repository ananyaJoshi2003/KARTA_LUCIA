const Joi = require('joi');
const { validateRequest } = require('./validationMiddleware');

const createAdminSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  fullName: Joi.string().allow(''),
  role: Joi.string().valid('admin', 'moderator', 'viewer').default('admin'),
  isActive: Joi.boolean().default(true),
});

const validateCreateAdmin = validateRequest(createAdminSchema);

module.exports = {
  validateCreateAdmin
};
