const userModel = require("../models/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const secretKey = process.env.SECRET_KEY;
/**
 * Generates a JSON Web Token (JWT) response for a given user detail.
 *
 * @param {Object} userDetail - User details object containing email and isAdmin properties.
 * @returns {string} - A JSON Web Token (JWT) string.
 */
const generateTokenResponse = (userDetail) => {
  const token = jwt.sign(
    {
      user_id: userDetail.id,
      email: userDetail.email,
      isAdmin: userDetail.isAdmin,
    },
    secretKey,
    {
      expiresIn: "1m",
    }
  );
  const refreshToken = jwt.sign(
    {
      user_id: userDetail.id,
      email: userDetail.email,
      isAdmin: userDetail.isAdmin,
    },
    secretKey,
    { expiresIn: "1d" }
  );

  return { token, refreshToken };
};
class LoginController {
  /**
   * Checks if a user exists and returns a token if credentials are valid.
   *
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  async userCheck(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      const user = await userModel
        .findOne({ email: email })
        .lean({ virtuals: true });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid password" });
      }

      const token = await generateTokenResponse(user);
      user.token = token.token;
      user.refreshToken = token.refreshToken;
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Errorr" });
    }
  }

  /**
   * Registers a new user and returns a token if registration is successful.
   *
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   */
  async registerUser(req, res) {
    try {
      const { name, email, password, confirmPassword } = req.body;
      if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: "All fields are required" });
      }
      if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        return res.status(400).json({ message: "Invalid email address" });
      }

      if (password.length < 6) {
        return res
          .status(400)
          .json({ message: "Password must be at least 6 characters" });
      }

      if (password !== confirmPassword) {
        return res
          .status(400)
          .json({ message: "Password and confirm password must match" });
      }
      const existingUser = await userModel.findOne({ email: email });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      const encryptedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        name: name,
        email: email,
        password: encryptedPassword,
        isAdmin: false,
      };
      const user = await userModel.create(newUser);
      const token = await generateTokenResponse(user);
      user.token = token;
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async refreshToken(req, res) {
    try {
      const refreshToken = req.headers.refreshtoken;
      if (!refreshToken) {
        return res
          .status(401)
          .send("Access Denied. No refresh token provided.");
      }
      const decoded = jwt.verify(refreshToken, secretKey);

      
      const accessToken = jwt.sign( {
        user_id: decoded.user_id,
        email: decoded.email,
        isAdmin: decoded.isAdmin,
      }, secretKey, {
        expiresIn: "1m",
      });
      const user = await userModel
        .findOne({ email: decoded.email })
        .lean({ virtuals: true });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      user.token = accessToken;
      user.refreshToken = refreshToken;
      res.send(user);
    } catch (err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  }
}
module.exports = new LoginController();
