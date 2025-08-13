const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Save contact form data
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check if email already exists
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

module.exports = router;
