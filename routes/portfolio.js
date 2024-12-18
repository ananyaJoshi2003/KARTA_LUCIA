const express = require('express');
const router = express.Router();
const PortfolioController  = require('../controllers/portfolioController');
const { validateCreatePortfolio } = require('../validations/portfolioValidation');

// Create a stock adjustment

router.post('/', validateCreatePortfolio, PortfolioController.createPortfolio);

router.post('/contact', PortfolioController.createContact);
router.get('/contact', PortfolioController.getContact);

// Get a single Portfolio or All
router.get('/', PortfolioController.getPortfolioByIdOrAll);

// Get a single Portfolio or All
router.get('/listNameLogo', PortfolioController.getPortfolioListNameLogo);

// Edit a Portfolio by ID
router.put('/:portfolioId', PortfolioController.editPortfolio);

// Get a single Portfolio or All
router.get('/:portfolioId', PortfolioController.getPortfolioById);

// Delete a Portfolio by ID
router.delete('/:id', PortfolioController.deletePortfolio);

module.exports = router;
