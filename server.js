const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors()); // Allow requests from your frontend
app.use(express.json()); // Parse JSON requests

const { EMAIL, PASSWORD } = process.env;

app.post('/send-email', async (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  const mailOptions = {
    from: EMAIL,
    to: 'aranasraza62@gmail.com', // Recipient email
    subject: subject || 'No Subject',
    html: `<p>Dear ${name},</p>
      <p>We have received your message:</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p>We will get back to you shortly!</p>
      <p>Best Regards,</p>
      <p>Your Company Name</p>`,
  };

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
    });

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    if (info && info.rejected.length === 0) {
      res.status(200).json({ message: 'Message sent successfully!' });
    } else {
      throw new Error('Email sending failed');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while sending the email', error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
