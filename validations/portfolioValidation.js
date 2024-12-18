const Joi = require('joi');
const { validateRequest } = require('./validationMiddleware');

const createPortfolioSchema = Joi.object({
  bannerUrl: Joi.string(),
  aboutUrl: Joi.string(),
  title: Joi.string().required(),
  desc: Joi.string().required(),
  imageUrl: Joi.string().required(),
  videoUrl: Joi.string().required(),
  about: Joi.string().required(),

  workUrl_1: Joi.string(),
  workUrl_2: Joi.string(),
  workUrl_3: Joi.string(),
  workUrl_4: Joi.string(),
  workUrl_5: Joi.string(),
  workUrl_6: Joi.string(),
  workUrl_7: Joi.string(),
  workUrl_8: Joi.string(),
  workUrl_9: Joi.string(),
  workUrl_10: Joi.string(),
  workUrl_11: Joi.string(),
  workUrl_12: Joi.string(),
  workUrl_13: Joi.string(),
  workUrl_14: Joi.string(),
  workUrl_15: Joi.string(),
  workUrl_16: Joi.string(),
  workUrl_17: Joi.string(),
  workUrl_18: Joi.string(),
});

const validateCreatePortfolio = validateRequest(createPortfolioSchema);

module.exports = {
  validateCreatePortfolio
};
