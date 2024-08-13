import React from 'react';

const ContactEmail = ({ prenom, email, message }) => (
  <div>
    <h1>Nouveau message de contact</h1>
    <p><strong>Prénom:</strong> {prenom}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Message:</strong> {message}</p>
  </div>
);

export default ContactEmail;
