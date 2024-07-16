const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.model");

const login = async (req, res) => {
  const body = req.body;
  const data = await UserModel.findOne(
    {
      email: body?.email,
      password: body?.password,
    },
    "-password -__v"
  );
  res.send(JSON.stringify(data));
  res.end();
};

const Register = async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    const SaveData = new UserModel({
      name: name || "",
      email: email || "",
      password: password || "",
      age: age || "",
    });
    const RealData = await SaveData.save();
    res.send(JSON.stringify(RealData));
  } catch (err) {
    res.end(JSON.stringify(err));
  }
};

module.exports = { login, Register };
