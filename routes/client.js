const express = require('express');
const router = express.Router();
const ClientController  = require('../controllers/clientController');
const { validateCreateClient } = require('../validations/clientValidation');

// Create a Client

router.post('/', validateCreateClient, ClientController.createClient);

// Get a Client
router.get('/', ClientController.getClient);

// Delete a Portfolio by ID
router.delete('/:id', ClientController.deleteClient);

module.exports = router;
