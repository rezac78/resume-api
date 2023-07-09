const Mongoose = require("mongoose");
const User = require("../models/Login");
const bcrypt = require("bcrypt");
// handle get all user
exports.getUser = (req, res) => {
  try {
    User.find().then((result) => {
      res.status(200).json({ User: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

// create userLogin => Post /api/signup/
exports.SingupUsers = async (req, res) => {
  try {
    const user = new User({
      _id: new Mongoose.Types.ObjectId(),
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    return res.status(200).json({ success: "true" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

// Login userLogin => Post /api/login/

exports.LoginUsers = async (req, res, next) => {
  const { email, password } = req.body;
  const users = await User.findOne({ email }).lean();
  if (!users) {
    return res.json({ status: 401, message: "Invalid username/password" });
  }
  if ((await password) === users.password) {
    return res.json({ status: 200, message: "succses password" });
  } else {
    return res.json({ status: 401, message: "Invalid password" });
  }
};
