// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3001; // Utiliser le port 3000 si PORT n'est pas défini
app.use(cors({
  origin: '*', // Autoriser toutes les origines
  methods: ['POST'], // Autoriser les méthodes GET et POST
  allowedHeaders: ['Content-Type', 'Authorization'] // Autoriser les en-têtes spécifiques
}));
app.use(function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); 
	next(); 
}); 
// Ajout de nouveaux éléments pour permettre à express de gérer le corps
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.post('/send-email', async (req, res) => {
	const { prenom, email, message } = req.body;

	// transporteur resend smtp
	const transporter = nodemailer.createTransport({
		// service: 'gmail',
		host: 'smtp.resend.com',
		secure: true, // Indique que nous utilisons SSL
		port: 465, // Utilisation du port 465 pour SSL
		auth: {
			user: 'resend', // Utiliser l'e-mail fourni par l'utilisateur
			pass: process.env.EMAIL_PASS,
		},
	});
	const mailOptions = {
		from: email, // Utiliser l'e-mail de l'expéditeur fourni par l'utilisateur
		to: process.env.EMAIL_RECEIVER, // Utiliser l'e-mail du destinataire fourni ou par défaut
		subject: 'Prise de contact via le formulaire',
		text: `Prénom: ${prenom}\nEmail: ${email}\nMessage: ${message}`,
	};
	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('E-mail envoyé: ' + info.response);
		res.status(200).send('Au plaisir de vous rencontrer !');
	} catch (error) {
		console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
		res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
	}
});
app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
