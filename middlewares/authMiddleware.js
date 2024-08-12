const JWT = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Authentication Failed",
        });
      } else {
        req.body, (userId = decode.id);
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Authentication Failed",
    });
  }
};

module.exports = authMiddleware;
