const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ quiet: true });

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      console.error("[auth] verify:", error.message);
      return res.status(403).json({ error: "Invalid token" });
    } 
    req.userid = decoded.id;
    req.role   = decoded.role;
    next();
  });
};

module.exports = authMiddleware;