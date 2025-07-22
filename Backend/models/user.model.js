import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true, maxLength: 30 },
  lastName: { type: String, required: true, trim: true, maxLength: 30 },
  email: {
    type: String, required: true, unique: true,
    trim: true, lowercase: true,
    minLength: [6, "Email must be at least 6 characters long"],
    maxLength: [50, "Email must not be longer than 50 characters"],
  },
  phoneNumber: { type: String, required: true, trim: true },
  countryCode: { type: String },
  gstin: { type: String },
  streetAddress: { type: String },
  city: { type: String },
  state: { type: String },
  postalCode: { type: String },
  country: { type: String },
  password: { type: String, required: true, select: false },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.isValidPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = mongoose.model("User", userSchema);
export default User;
