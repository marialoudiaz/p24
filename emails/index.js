import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 587,
  secure: false, // True pour port 465, false pour les autres ports
  auth: {
    user: process.env.EMAIL_RECEIVER, // Votre email de réception
    pass: process.env.EMAIL_PASS, // Votre mot de passe email
  },
});

export default async function sendMail({ subject, to, text, userEmail }) {
  const mailOptions = {
    from: userEmail, // Utilise l'email fourni par l'utilisateur
    to, // Adresse email du destinataire
    subject, // Sujet de l'email
    text, // Contenu de l'email en texte brut
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail envoyé: ' + info.response);
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    throw error;
  }
}
