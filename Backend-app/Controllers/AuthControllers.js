const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false });
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

const login = async (req, res) => {
    try {
        console.log("Login endpoint hit");

        const { email, password } = req.body;
        console.log("Login Request Body:", req.body);

        // Validate input
        if (!email || !password) {
            console.log("Validation failed: Email or password missing");
            return res.status(400).json({
                message: 'Email and password are required',
                success: false
            });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            console.log("User not found for email:", email);
            return res.status(403).json({
                message: 'Authentication failed. Email or password is incorrect.',
                success: false
            });
        }

        console.log("User found:", user);

        // Compare the password
        const isPassEqual = await bcrypt.compare(password, user.password);
        console.log("Password match result:", isPassEqual);

        if (!isPassEqual) {
            console.log("Password mismatch for email:", email);
            return res.status(403).json({
                message: 'Authentication failed. Email or password is incorrect.',
                success: false
            });
        }

        // Generate JWT token
        const jwtSecret = process.env.JWT_SECRET || 'defaultSecretKey';
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            jwtSecret,
            { expiresIn: '24h' }
        );

        console.log("JWT token generated for user:", user.email);

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            user: {
                email: user.email,
                name: user.name
            }
        });

        console.log("Login successful for user:", user.email);
    } catch (err) {
        console.error("Error during login:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};


module.exports = {
    signup,
    login
}