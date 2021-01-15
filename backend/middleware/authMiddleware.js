const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    const [header, token] = authHeader.split(" ");
    if (header === "Bearer") {
      // "decodedToken" can be used in the callback function
      jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
          res.status(403).json({
            success: 0,
            errors: {
              token: "invalid signature",
            },
          });
        } else {
          next();
        }
      });
    } else {
      res.status(403).json({
        success: 0,
        errors: {
          token: "invalid header",
        },
      });
    }
  } else {
    res.status(403).json({
      success: 0,
      errors: {
        token: "not present",
      },
    });
  }
};

module.exports = {
  requireAuth,
};
