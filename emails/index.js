const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: "ssl0.ovh.net",
  port: 587,
  auth: {
    user: process.env.EMAIL_RECEIVER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = transport;

// app.post('/send-email', async (req, res) => {
// 	const { prenom, email, message } = req.body;
// 	const transporter = nodemailer.createTransport({
// 		// service: 'gmail',
// 		host: 'ssl0.ovh.net',
// 		port: 587, // Utilisation du port 465 pour SSL
// 		secure: false, // Indique que nous utilisons SSL
// 		auth: {
// 		user: process.env.EMAIL_RECEIVER, // Utiliser l'e-mail fourni par l'utilisateur
// 		pass: process.env.EMAIL_PASS,
// 		},
// 	});