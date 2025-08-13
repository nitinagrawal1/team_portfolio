// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true, // prevents duplicate emails
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
