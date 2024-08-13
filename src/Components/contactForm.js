import React, { useState,useRef, useEffect } from 'react';
import '../App.scss';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import sendMail from '../emails';  // Importez votre configuration mailing
import ContactEmail from '../emails/ContactEmail';  // Importez votre template d'email


const ContactForm = ({lang}) => {

// Recevoir & envoyer infos
const location = useLocation();
const { infosComposants } = location.state;


// EN OU FR pour messages erreurs
const isEnglish = lang.lang

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
  handleSubmit(props);
  }
  };


	const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await sendMail({
        subject: 'Prise de contact via le formulaire',
        to: process.env.EMAIL_RECEIVER,
        userEmail: emailData.email, // Passe l'email de l'utilisateur ici
        text: `Prénom: ${emailData.prenom}\nEmail: ${emailData.email}\nMessage: ${emailData.message}`,
      });
      setMessage(lang.lang === 'EN' ? 'See you soon! 🌟' : 'Au plaisir de vous rencontrer! 🌟');
    } catch (error) {
      setMessage(lang.lang === 'EN' ? 'Please, try again soon :)' : 'Veuillez réessayer ultérieurement :)');
    } finally {
      setSubmitting(false);
      setEmailData({
        prenom: '',
        email: '',
        message: '',
      });
    }
  };


return (
<>
<form onSubmit={handleSubmit}>
		<div className='flexCol'>
			<label htmlFor="prenom">{variableTags[3]}</label>
			<input
				type='text'
				id="prenom"
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