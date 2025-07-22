// user.controller.js
import User from '../models/user.model.js';

import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

export const createUserController = async (req, res) => {
  // Validate inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).json({ errors: [{ msg: "Email already in use" }] });

    // Create new user
    const user = new User(req.body);
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    return res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: error.message }] });
  }
};

export const loginController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });

    const validPassword = await user.isValidPassword(password);
    if (!validPassword) return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ errors: [{ msg: error.message }] });
  }
};

// Add other controllers similarly (profileController, logoutController, getAllUsersController)
export const profileController = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) return res.status(404).json({ msg: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  
  export const logoutController = (req, res) => {
    // Since JWT is stateless, logout can be handled client-side by deleting token
    // Or maintain a token blacklist (advanced)
    res.json({ msg: "Logout successful (client should delete token)" });
  };
  
  export const getAllUsersController = async (req, res) => {
    try {
      // Exclude current user from list
      const users = await User.find({ _id: { $ne: req.user.id } }).select('-password');
      res.json(users);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  