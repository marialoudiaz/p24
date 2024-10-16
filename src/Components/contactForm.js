import React, { useState,useRef, useEffect } from 'react';
import '../App.scss';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ContactForm = (lang) => {

// Recevoir & envoyer infos
const location = useLocation();
const { infosComposants } = location.state;

// EN OU FR pour messages erreurs
	const isEnglish = lang.lang
	const yesmessage = ['See you soon ! 🌟','Au plaisir de vous rencontrer ! 🌟'];
	const nomessage = ['Please, try again soon :)','Veuillez rééssayer ultérieurement :)'];

	const [emailData, setEmailData] = useState({
		prenom: '',
		email: '',
		message: '',
	});
	const [message, setMessage] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [question, setQuestion] = useState('');
	const [acceptTerms, setAcceptTerms] = useState(false); // Ajoutez l'état pour la case à cocher
	const variableTags = infosComposants[0].form;

// Extraire l'identifiant de l'URL
const id = location.pathname.split('/').pop();
const form = useRef();
const sendEmail = (e) => {
	e.preventDefault();
	emailjs
		.sendForm('service_ivm0jcp', 'template_9e5o1we', form.current, {
			publicKey: 'B1zXmJt5Z5YABJKhe',
		})
		.then(
			() => {
				console.log('SUCCESS!');
				setMessage(isEnglish=='EN' ? yesmessage[0] : yesmessage[1]);
			},
			(error) => {
				console.log('FAILED...', error.text);
				setMessage(isEnglish=='EN' ? nomessage[0] : nomessage[1]);
			},
		);
};
//modifier form
const handleInputChange = (e) => {
	setEmailData({ ...emailData, [e.target.id]: e.target.value });
};
// question c - handlechange
const handleChange = (e) => {
  let valueC = '';
  valueC = e;
  setQuestion(valueC);
  // Appeler la fonction pour gérer le changement de la question
  handleSubmitQuestion(valueC);
};
// question c - validation form
const handleSubmitQuestion = (props) => {
  if (props !== '' && acceptTerms) {
  console.log('See you in hell,bitch');
  window.location.href = 'https://www.bible.com/fr/bible/63/MAT.13.24-48.BFC';
  } else {
  sendEmail(props);
  }
  };

// const handleSubmit = async (e) => {
// 	e.preventDefault();
// 	setSubmitting(true);
//   try {
// // Envoi des données au backend
// await axios.post('http://localhost:3001/send-email', {
// 	to: process.env.EMAIL_RECEIVER, // Mettez la destination de l'e-mail ici
// 	subject: 'Prise de contact via le formulaire',
// 	prenom : emailData.prenom,
// 	email: emailData.email,
// 	message: emailData.message,
// // body: JSON.stringify(emailData),
// });
// setMessage(isEnglish=='EN' ? yesmessage[0] : yesmessage[1]);
// } catch (error) {
// 	console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
// 	setMessage(isEnglish=='EN' ? nomessage[0] : nomessage[1]);
// } finally {
// 	setSubmitting(false);
// 	setEmailData({
// 	prenom: '',
// 	email: '',
// 	message: '',
// });
// }
// };




return (
<>
<form ref={form} onSubmit={sendEmail}>
	<div className='flexCol'>
		<label htmlFor="prenom">{variableTags[3]}</label>
		<input
			type='text'
			id="prenom"
			name='user_name'
			value={emailData.prenom}
			onChange={handleInputChange}
			required
		/>
	</div>
	<div className='flexCol'>
		<label htmlFor="email">{variableTags[4]}</label>
		<input
			type='email'
			id="email"
			name='user_email'
			value={emailData.email}
			onChange={handleInputChange}
			required
		/>
	</div>
	<div className='flexCol'>
			<label htmlFor="message">{variableTags[5]}</label>
			<textarea
				type="message"
				id="message"
				name='message'
				value={emailData.message}
				onChange={handleInputChange}
				required
			/>
	</div>
  <div className='c'>
    <label htmlFor="question">Do you like chocolate ?</label>
    <input type="text" id="question" name="question" value={question} onChange={(e)=>handleChange(e)}/>
  </div>   

	<div className='flexForm'>
			<button
				className='btn-black'
				type="submit"
				disabled={submitting}>		
				{variableTags[6]}
			</button>
		<p>{message}</p>
		</div>
	</form>
</>
	);
};

export default ContactForm