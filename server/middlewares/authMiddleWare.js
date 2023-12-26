const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => { 
  let token;
  console.log("AUTH HEADER:" + req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      next();
    } catch (error) {
      return res.status(401).json({message : "Not authorized. Token failed. Please login with the correct USER credentials."});
    }
  }

  if (!token) {
    return res.status(401).json({message : "Not authorized. Token failed. Please login with the correct USER credentials."});
  }
});

module.exports = { protect };
