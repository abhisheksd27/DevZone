// auth.controller.js

// Import necessary modules
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import errorHandler from "../utils/error.js";

// Signup function
const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return next(errorHandler(400, 'All fields are required'));
    }
    const hashpassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashpassword,
    });

    try {
        await newUser.save();
        res.json("Signup successful");
    } catch (error) {
        next(error);
    }
};

// Signin function
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === '' || password === '') {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(400, 'Invalid email or password'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid email or password'));
        }

        const token = jwt.sign(
            {
                id: validUser._id,
            },
            process.env.JWT_SECRET, // Use JWT secret from environment variables
            {
                expiresIn: '1d'
            }
        );

        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json({ message: 'Signin successful', token });

    } catch (error) {
        next(error);
    }
};

// Google authentication function
export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            const token = jwt.sign({
                id: user._id
            }, process.env.JWT_SECRET);

            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json({ message: 'Google signin successful', token });
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({
                username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl,
            });
            await newUser.save();
            const token = jwt.sign({
                id: newUser._id
            }, process.env.JWT_SECRET);

            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json({ message: 'Google signup successful', token });
        }
    } catch (error) {
        next(error);
    }
};

// Export the signup function as default
export default signup;
