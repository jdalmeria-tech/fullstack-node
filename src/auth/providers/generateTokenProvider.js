const jwt = require("jsonwebtoken");

function generateTokenProvider(user) {
  const payload = {
    sub: user["_id"],
    email: user.email,
    iat: Math.floor(Date.now() / 1000),
    exp:
      Math.floor(Date.now() / 1000) +
      parseInt(process.env.JWT_ACCESS_EXPIRATION_TTL), // Token valid for 24 hours
  };

  return jwt.sign(payload, process.env.JWT_SECRET);
}

module.exports = generateTokenProvider;
