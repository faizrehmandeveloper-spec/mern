import User from "../models/User.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // const userExist = await User.findOne({ email: email });
    // if (userExist) {
    //   return res.status(400).json({
    //     message: "User Already Exist",
    //   });
    // }

    const hashpassword = await bcrypt.hash(password, 10);
    const token = crypto.randomBytes(32).toString("hex");
    const user = await User.create({
      name,
      email,
      password: hashpassword,
      verificationToken: token,
    });
    res.status(201).json({
      message: "User registered. Verify email.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
