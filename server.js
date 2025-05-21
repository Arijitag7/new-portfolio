const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static frontend

// POST endpoint to receive contact form data
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please fill all the fields' });
  }

  // Configure transporter with Gmail
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Gmail address
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  // Email options
  let mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name} via Portfolio Contact Form`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ msg: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Failed to send message' });
  }
});

// Serve index.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
