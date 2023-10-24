const router = require("express").Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

router.post("/createUser", async (req, res) => {
    try {
        const { firstName, lastName, email, password, isAdmin } = req.body;

        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            isAdmin: isAdmin,
        });

        const newUser = await user.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: 7 * 24 * 60 * 60,
        });

        res.json({
            message: "register endpoint",
            user: newUser,
            token: token,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({ email: email });
    
        //  If the user doesn't exist then throw an error and exit the function
        if (!user) {
            throw new Error("User does not exist");
        }
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin  }, process.env.JWT_SECRET, {
            expiresIn: 7 * 24 * 60 * 60,
        });
    
        const isPasswordAMatch = user.password === password;
        
        
        if (isPasswordAMatch === false) {
            throw new Error("Passwords do not match");
        }
        
        res.json({ 
            message: "signin endpoint", 
            user: user,
            token: token,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;