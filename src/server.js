// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 443;

app.use(cors({
	origin: 'https://www.marialoudiaz.fr', // Permet uniquement cette origine
	methods: ['GET', 'POST', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'],
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

// app.get('/get-key', (req, res) => {
//   const apiKey = process.env.REACT_APP_RECAPTCHA_KEY; // Remplacez par votre véritable clé d'API
//   res.json({ apiKey });
// });

// Gérer les requêtes OPTIONS
app.options('*', cors());

app.post('/send-email', async (req, res) => {
	const { prenom, email, message } = req.body;
	const transporter = nodemailer.createTransport({
		// service: 'gmail',
		host: 'ssl0.ovh.net',
		port: 587, // Utilisation du port 465 pour SSL
		secure: false, // Indique que nous utilisons SSL
		auth: {
		user: process.env.EMAIL_RECEIVER, // Utiliser l'e-mail fourni par l'utilisateur
		pass: process.env.EMAIL_PASS,
		},
	});
	const mailOptions = {
		from: email, // Utiliser l'e-mail de l'expéditeur fourni par l'utilisateur
		to: process.env.EMAIL_RECEIVER, // Utiliser l'e-mail du destinataire fourni ou par défaut
		// subject: subject || 'Prise de contact via le formulaire', // Utiliser le sujet fourni ou par défaut
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
