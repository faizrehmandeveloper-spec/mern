import User from "../models/User.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export const register = async (req, res) => {
  const name = req.body.name?.trim();
  const email = req.body.email?.trim().toLowerCase();
  const { password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required.",
      });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        message: "User already exists.",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString("hex");
    await User.create({
      name,
      email,
      password: hashpassword,
      verificationToken: token,
    });
    res.status(201).json({
      message: "User registered successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed.",
    });
  }
};
