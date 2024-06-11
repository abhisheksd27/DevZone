// verifyUser.js

// Import necessary modules
import jwt from 'jsonwebtoken';
import errorHandler from './error.js';

// Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token; // Retrieve token from cookies
    if (!token) {
        return next(errorHandler(401, 'Unauthorized: No token provided'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return next(errorHandler(401, 'Unauthorized: Invalid token'));
        }
        req.user = decodedToken;
        next();
    });
};
