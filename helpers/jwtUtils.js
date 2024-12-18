const jwt = require('jsonwebtoken');

const generateToken = (payload, secretKey, expiresIn) => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

module.exports = { generateToken };
