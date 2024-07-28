const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const secretKey = process.env.SECRET_KEY
const authVerification = (req, res, next) => {
    const token = req.headers.access_token;
    if (!token) {
        return res
            .status(401)
            .json({ message: "You are not authorized to access this resource." });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
    } catch (err) {
        return res
            .status(401)
            .json({ message: "You are not authorized to access this resource." });
    }

    return next();
};

module.exports = authVerification
