const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // Get the authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // If token is null, return 401 Unauthorized
  if (token == null) {
    return res.sendStatus(401);
  }

  // Verify the JWT token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    // If token is invalid, return 403 Forbidden
    if (err) {
      return res.sendStatus(403);
    }
    console.log("user",user)
    // If token is valid, set the user object in the request and call next middleware
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
