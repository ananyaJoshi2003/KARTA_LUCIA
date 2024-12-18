const Client = require('../models/client');
const { sendSuccessResponse, sendFailureResponse } = require('../helpers/responseHelper');

// Create a new Client
const createClient = async (req, res) => {
  try {
    const { clientName } = req.body;

    const client = new Client({ clientName });
    await client.save();

    return sendSuccessResponse(res, 'Client created successfully', client, 201);
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

// Get all Client 
const getClient = async (req, res) => {
  try {

    const client = await Client.find().sort({ createdAt: -1 }).exec();
    return sendSuccessResponse(res, 'Client retrieved successfully', client);
 
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

const deleteClient = async (req, res) => {
  try {
    const clientId = req.params.id;

    const client = await Client.findByIdAndRemove(clientId);

    if (!client) {
      return sendFailureResponse(res, 'Client not found', 404);
    }

    return sendSuccessResponse(res, 'Client deleted successfully');
  } catch (error) {
    console.error(error);
    return sendFailureResponse(res, 'Internal server error', 500);
  }
};

module.exports = {
  createClient,
  getClient,
  deleteClient
};
