const User = require("../models/User");
const generateToken = require("../utils/generateToken");


exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "Email already exists" });

  const user = await User.create({ name, email, password });

  res.status(201).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    },
  });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password)))
    return res.status(401).json({ message: "Invalid credentials" });

  res.status(200).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    },
  });
};

exports.getProfile = async (req, res) => {
  const user = req.user;
  if (!user)
    return res.status(404).json({ message: "User not found" });

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
  });
};
