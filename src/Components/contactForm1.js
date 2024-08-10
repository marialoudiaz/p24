import React, { useState,useRef, useEffect } from 'react';
import '../App.scss';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import ReCAPTCHA from "react-google-recaptcha";

const Formulaire = ({userEmail}) => {

  // Recevoir & envoyer infos
  const location = useLocation();
  const { infosComposants } = location.state;
	const [emailData, setEmailData] = useState({
		prenom: '',
		email: '',
		message: '',
	});
	const [message, setMessage] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [question, setQuestion] = useState('');
	const [acceptTerms, setAcceptTerms] = useState(false); // Ajoutez l'état pour la case à cocher
	// const [captchaIsDone, setCaptchaDone]= useState(false);
	// const [apiKey, setApiKey] = useState('keynotaskedyet');
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
  // if (state.succeeded) {
  // return <p>Merci pour votre message, je vous recontacte prochainement !</p>;

	//url active
	// Récupérer l'URL active (par exemple, http://localhost:3000 ou https://votresite.com)
	const apiUrl = window.location.origin;

const handleSubmit = async (e) => {
	e.preventDefault();
	setSubmitting(true);
  try {
// Envoi des données au backend
await axios.post('https://www.marialoudiaz.fr/send-email', {
	to: process.env.EMAIL_RECEIVER, // Mettez la destination de l'e-mail ici
	subject: 'Prise de contact via le formulaire',
	prenom : emailData.prenom,
	email: emailData.email,
	message: emailData.message,
// body: JSON.stringify(emailData),
});
setMessage('Au plaisir de vous rencontrer ! 🌟');
} catch (error) {
	console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
	setMessage('Erreur lors de l\'envoi de l\'e-mail');
} finally {
	setSubmitting(false);
	setEmailData({
	prenom: '',
	email: '',
	message: '',
});
}
};
//OnChange CAPTCHA
// function onChange(value) {
//   console.log("Captcha value:", value);
// 	setCaptchaDone(true)
// }
// Récupérer la clef recaptcha
// useEffect(() => {
// 	// Faire une requête GET pour récupérer la clé d'API depuis votre backend
// 	axios.get('http://localhost:3001/get-key')
// 		.then(response => {
// 			setApiKey(response.data.apiKey);
// 		})
// 		.catch(error => {
// 			console.error('Erreur lors de la récupération de la clé d\'API :', error);
// 		});
// }, []); // Ce useEffect s'exécute une seule fois au chargement du composant


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

		 {/* <ReCAPTCHA
    sitekey={apiKey}
    onChange={onChange}
    />   */}
	
	{/* {captchaIsDone &&  */}
	<div className='flexForm'>
			<button
				className='btn-black'
				type="submit"
				disabled={submitting}>		
				{variableTags[6]}
			</button>
		<p>{message}</p>
		</div>
	{/* }	 */}
	</form>
</>
	);
};

export default Formulaire