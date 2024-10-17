const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/admin');
const bookRoutes = require('./routes/books');
const userRoutes =require('./routes/user')

const app = express();
const PORT = process.env.PORT || 5000;



dotenv.config();

connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Nodemailer configuration
require('dotenv').config(); // Load .env variables

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email from env
        pass: process.env.EMAIL_PASS, // Your email password from env
    }
});


// Route to handle contact form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill in all fields.' });
    }

    const mailOptions = {
        from: email,
        to: 'your_email@gmail.com', // Your email to receive the contact form data
        subject: `Contact Form Submission from ${name}`,
        text: `You received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email send error:', error); // Log the error
            return res.status(500).json({ error: 'Failed to send email.' });
        }
        console.log('Email sent:', info.response);
        return res.status(200).json({ message: 'Email sent successfully!' });
    });
});

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/user', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
