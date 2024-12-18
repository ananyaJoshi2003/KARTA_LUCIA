const Portfolio = require('../models/portfolio');
const Contact = require('../models/contact');
const { sendSuccessResponse, sendFailureResponse } = require('../helpers/responseHelper');

// Create a new Portfolio
const createPortfolio = async (req, res) => {
  try {
    const {
      bannerUrl,
      aboutUrl,
      title,
      desc,
      imageUrl,
      videoUrl,
      about,
      workUrl_1,
      workUrl_2,
      workUrl_3,
      workUrl_4,
      workUrl_5,
      workUrl_6,
      workUrl_7,
      workUrl_8,
      workUrl_9,
      workUrl_10,
      workUrl_11,
      workUrl_12,
      workUrl_13,
      workUrl_14,
      workUrl_15,
      workUrl_16,
      workUrl_17,
      workUrl_18
    } = req.body;

    const portfolio = new Portfolio({  
      bannerUrl,
      aboutUrl,
      title,
      desc,
      imageUrl,
      videoUrl,
      about,
      workUrl_1,
      workUrl_2,
      workUrl_3,
      workUrl_4,
      workUrl_5,
      workUrl_6,
      workUrl_7,
      workUrl_8,
      workUrl_9,
      workUrl_10,
      workUrl_11,
      workUrl_12,
      workUrl_13,
      workUrl_14,
      workUrl_15,
      workUrl_16,
      workUrl_17,
      workUrl_18 
    });
    
    await portfolio.save();

    return sendSuccessResponse(res, 'Portfolio created successfully', portfolio, 201);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Get all PortfolioId or a single Portfolio by PortfolioId
const getPortfolioByIdOrAll = async (req, res) => {
  try {
    const { portfolioId } = req.query;

    if (portfolioId) {
      const portfolio = await Portfolio.findOne({ _id: portfolioId }).exec();
      if (!portfolio) {
        return sendFailureResponse(res, 'Portfolio not found', 404);
      }
      return sendSuccessResponse(res, 'Portfolio retrieved successfully', portfolio);
    } else {
      const portfolio = await Portfolio.find().sort({ createdAt: -1 }).exec();
      return sendSuccessResponse(res, 'Portfolio retrieved successfully', portfolio);
    }
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

const getPortfolioListNameLogo = async (req, res) => {
  try {
  
      const portfolio = await Portfolio.find({},{ imageUrl:1, _id:1, title: 1 }).sort({ createdAt: -1 }).exec();
      return sendSuccessResponse(res, 'Portfolio retrieved successfully', portfolio);

  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

const getPortfolioById = async (req, res) => {
  try {
    const { portfolioId } = req.params;

    const portfolio = await Portfolio.findOne({ _id: portfolioId }).exec();
      if (!portfolio) {
        return sendFailureResponse(res, 'Portfolio not found', 404);
      }
      return sendSuccessResponse(res, 'Portfolio retrieved successfully', portfolio);

  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Edit a product by ID
const editPortfolio = async (req, res) => {
  try {
    const { portfolioId } = req.params;

    const { bannerUrl,
      aboutUrl,
      title,
      desc,
      imageUrl,
      videoUrl,
      about,
      workUrl_1,
      workUrl_2,
      workUrl_3,
      workUrl_4,
      workUrl_5,
      workUrl_6,
      workUrl_7,
      workUrl_8,
      workUrl_9,
      workUrl_10,
      workUrl_11,
      workUrl_12,
      workUrl_13,
      workUrl_14,
      workUrl_15,
      workUrl_16,
      workUrl_17,
      workUrl_18 } = req.body;

    // Find the product by ID and update its properties
    const portfolio = await Portfolio.findByIdAndUpdate(
      portfolioId,
      { bannerUrl,
        aboutUrl,
        title,
        desc,
        imageUrl,
        videoUrl,
        about,
        workUrl_1,
        workUrl_2,
        workUrl_3,
        workUrl_4,
        workUrl_5,
        workUrl_6,
        workUrl_7,
        workUrl_8,
        workUrl_9,
        workUrl_10,
        workUrl_11,
        workUrl_12,
        workUrl_13,
        workUrl_14,
        workUrl_15,
        workUrl_16,
        workUrl_17,
        workUrl_18 },
      { new: true } // Return the updated product
    );

    if (!portfolio) {
      return sendFailureResponse(res, 'Portfolio not found', 404);
    }

    return sendSuccessResponse(res, 'Portfolio updated successfully', portfolio);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Delete a product by ID
const deletePortfolio = async (req, res) => {
  try {
    const portfolioId = req.params.id;

    // Find the product by ID and remove it
    const portfolio = await Portfolio.findByIdAndRemove(portfolioId);

    if (!portfolio) {
      return sendFailureResponse(res, 'Portfolio not found', 404);
    }

    return sendSuccessResponse(res, 'Portfolio deleted successfully');
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};


const createContact = async (req, res) => {
  try {
    const {
      email} = req.body;

    const contact = new Contact({  
      email,
    });
    
    await contact.save();

    return sendSuccessResponse(res, 'Contact created successfully', contact, 201);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

const getContact = async (req, res) => {
  try {
  
      const contact = await Contact.find({ }).sort({ createdAt: -1 }).exec();
      return sendSuccessResponse(res, 'Contact retrieved successfully', contact);

  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

module.exports = {
  createPortfolio,
  getPortfolioByIdOrAll,
  editPortfolio,
  deletePortfolio,
  getPortfolioById,
  getPortfolioListNameLogo,
  createContact,
  getContact
};
