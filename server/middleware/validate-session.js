const jwt = require("jsonwebtoken");
const User = require("../models/user.model")


const validateSession = async (req, res, next) => {
    try {
        // ! 1. extract the token from the headers
        const token = req.headers.authorization;
        // console.log("token" , token);
        // ! 2. verify and decode the token
        const decodedToken = jwt.verify(token , process.env.JWT_SECRET)
        // console.log("decodedToken", decodedToken);

        // ! 3. check the database to see if the user is active
        const user = await User.findById(decodedToken.id);

        if(!user) {
            throw new Error("user not found")
        }
        req.user = user;

        return next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = validateSession;