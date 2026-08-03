// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config({ quiet: true });

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization || "";
//   const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

//   if (!token) return res.status(401).json({ error: "No token provided" });

//   jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
//     if (error) {
//       console.error("[auth] verify:", error.message);
//       return res.status(403).json({ error: "Invalid token" });
//     }
//     req.userid = decoded.id;
//     req.role   = decoded.role;
//     next();
//   });
// };

// module.exports = authMiddleware;

import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export interface AuthenticatedRequest extends Request {
  userid?: number | string;
  role?: string;
  headers: {
    authorization?: string;
  };
}

export interface DecodedToken extends JwtPayload {
  id?: number | string;
  role?: string;
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) return res.status(401).json({ error: 'No token provided' });

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    console.error('[auth] JWT_SECRET is missing in environment variables');
    return res.status(500).json({ error: 'Internal server error' });
  }

  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      console.error('[auth] verify:', error.message);
      return res.status(403).json({ error: 'Invalid token' });
    }

    const payload = decoded as DecodedToken;
    req.userid = payload?.id;
    req.role = payload?.role;
    next();
  });
};

export default authMiddleware;
