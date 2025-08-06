const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// SMTP Transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // SMTP server (e.g., Gmail SMTP)
    port: 465, // SMTP port (587 for TLS or 465 for SSL)
    secure: true, // Use SSL
    auth: {
        user: process.env.EMAIL_USER, // Replace with your SMTP email
        pass: process.env.EMAIL_PASS, // Replace with your SMTP email password or app-specific password
    }
});

// Use the direct image link from ImgBB for the logo
const logoUrl = 'https://i.ibb.co/N6HBqtqK/logo.png'; // Direct image link for embedding

// API Route to Send OTP Email
app.post('/send-otp', async (req, res) => {
    const { email, otp } = req.body;

    const html = `
      <div>
        <img src="${logoUrl}" alt="Logo" width="120" style="margin-bottom:16px;" />
        <p>Your OTP is: <strong>${otp}</strong>. Use this to reset your password.</p>
      </div>
    `;

    const mailOptions = {
        from: 'pavan.test03@gmail.com',
        to: email,
        subject: 'Your OTP for Password Reset',
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).send({ message: 'OTP sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to send email' });
    }
});

// API Route to Send PNR Email
app.post('/send-pnr', async (req, res) => {
    const { email, pnr, name, trainName, trainNumber, travelDate, source, destination } = req.body;

    const html = `
      <div>
        <img src="${logoUrl}" alt="Logo" width="120" style="margin-bottom:16px;" />
        <p>Dear ${name},</p>
        <p>Your ticket has been booked successfully!</p>
        <ul>
          <li><strong>PNR:</strong> ${pnr}</li>
          <li><strong>Train:</strong> ${trainName} (${trainNumber})</li>
          <li><strong>Date:</strong> ${travelDate}</li>
          <li><strong>From:</strong> ${source}</li>
          <li><strong>To:</strong> ${destination}</li>
        </ul>
        <p>Please keep this PNR for future reference.</p>
        <p>Thank you for booking with us!</p>
      </div>
    `;

    const mailOptions = {
        from: 'pavan.test03@gmail.com',
        to: email,
        subject: 'Your Train Ticket & PNR Confirmation',
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('PNR Email sent: ' + info.response);
        res.status(200).send({ message: 'PNR email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to send PNR email' });
    }
});

// API Route to Send Cancellation Email
app.post('/send-cancel', async (req, res) => {
    const { email, name, pnr, trainName, trainNumber, travelDate, source, destination } = req.body;

    const html = `
      <div>
        <img src="${logoUrl}" alt="Logo" width="120" style="margin-bottom:16px;" />
        <p>Dear ${name},</p>
        <p>Your booking has been cancelled.</p>
        <ul>
          <li><strong>PNR:</strong> ${pnr}</li>
          <li><strong>Train:</strong> ${trainName} (${trainNumber})</li>
          <li><strong>Date:</strong> ${travelDate}</li>
          <li><strong>From:</strong> ${source}</li>
          <li><strong>To:</strong> ${destination}</li>
        </ul>
        <p>If this was a mistake or you have questions, please contact support.</p>
        <p>Thank you.</p>
      </div>
    `;

    const mailOptions = {
        from: 'pavan.test03@gmail.com',
        to: email,
        subject: 'Your Train Ticket Cancellation Confirmation',
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Cancellation Email sent: ' + info.response);
        res.status(200).send({ message: 'Cancellation email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to send cancellation email' });
    }
});

// API Route to Send Package Booking Receipt Email
app.post('/send-package-receipt', async (req, res) => {
    const { email, name, packageName, travelDate, endDate, persons, price, bookingId, days, totalPersons, fromStation, toStation, trainName, trainNumber, departureTime, arrivalTime } = req.body;

    let html = `
      <div>
        <img src="${logoUrl}" alt="Logo" width="120" style="margin-bottom:16px;" />
        <p>Dear ${name},</p>
        <p>Your package booking is confirmed!</p>
        <ul>
          <li><strong>Booking ID:</strong> ${bookingId}</li>
          <li><strong>Package:</strong> ${packageName}</li>
          <li><strong>Travel Date:</strong> ${travelDate}</li>
          ${endDate ? `<li><strong>End Date:</strong> ${endDate}</li>` : ''}
          <li><strong>Persons:</strong> ${persons}</li>
          <li><strong>Days:</strong> ${days}</li>
          <li><strong>Price:</strong> ${price}</li>
          ${fromStation && toStation ? `<li><strong>From:</strong> ${fromStation}</li><li><strong>To:</strong> ${toStation}</li>` : ''}
          ${(trainName || trainNumber) ? `<li><strong>Train:</strong> ${trainName || ''} (${trainNumber || ''})</li>` : ''}
          ${departureTime ? `<li><strong>Departure:</strong> ${departureTime}</li>` : ''}
          ${arrivalTime ? `<li><strong>Arrival:</strong> ${arrivalTime}</li>` : ''}
        </ul>
        <p>Thank you for booking with us!</p>
      </div>
    `;

    const mailOptions = {
        from: 'pavan.test03@gmail.com',
        to: email,
        subject: 'Your Package Booking Receipt',
        html,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Package Receipt Email sent: ' + info.response);
        res.status(200).send({ message: 'Package receipt email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Failed to send package receipt email' });
    }
});

// Start the Server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
