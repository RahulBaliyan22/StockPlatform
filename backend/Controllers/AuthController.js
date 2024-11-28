const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/userModel");


const signup = async (req, res) => {
    try {
        
        console.log("in")
      const { username, email, password } = req.body;
  
      // Validate request body
      if (!username || !email || !password) {
        return res.status(400).json({
          message: "All fields are required",
          success: false,
        });
      }
  
      // Check if the user already exists
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          message: "User already exists. Please log in.",
          success: false,
        });
      }
  
      // Create and save the new user
      const newUser = new UserModel({ username, email, password });
      await newUser.save();
  
      res.status(201).json({
        message: "Signup successful",
        success: true,
      });
    } catch (err) {
        console.log("out")
      console.error("Error in signup:", err.message);
      res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  };
  


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}

module.exports = {
    signup,
    login
}