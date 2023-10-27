const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const userIsAdmin = async (req, res, next) => {
    try {
        // 1. Extract the token from the headers
        const token = req.headers.authorization;

        // 2. Verify and decode the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // 3. Check the database to see if the user is active
        const user = await User.findById(decodedToken.id);

        if (!user) {
            throw new Error("User not found");
        }

        // Check if the user is an admin (assuming you have an 'isAdmin' field in your user model)
        if (!user.isAdmin) {
            // If the user is not an admin, return a 403 Forbidden response
            return res.status(403).json({ message: "Permission denied" });
        }

        req.user = user;

        return next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = userIsAdmin;
