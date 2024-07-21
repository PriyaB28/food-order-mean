const userModel = require("../models/User");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY || "a-secure-random-key";
const generateTokenResponse = (userDetail) => {
  const token = jwt.sign(
    {
      email: userDetail.email,
      isAdmin: userDetail.isAdmin,
    },
    secretKey,
    {
      expiresIn: "30m",
    }
  );

  return token;
};
class LoginController {
  async userCheck(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      const user = await userModel
        .findOne({
          $and: [{ email: email }, { password: password }],
        })
        .lean();
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const token = await generateTokenResponse(user);
      user.token = token;
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Errorr" });
    }
  }
}
module.exports = new LoginController();
