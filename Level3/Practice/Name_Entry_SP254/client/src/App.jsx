import React, { useState } from 'react';
import Form from './components/Form';
import NameList from './components/NameList';
import './App.css';
import ContactInfo from './components/ContactInfo';

export default function App() {
  //The `contacts` state variable holds an array of contacts
  const [contacts, setContacts] = useState([]);
  //`duplicate` holds a boolean value to indicate whether a duplicate contact has been found
  const [duplicate, setDuplicate] = useState(false);
  //`selectedContact` holds the currently selected contact object
  const [selectedContact, setSelectedContact] = useState(null);
  //`formData` holds the form data submitted by the user
  const [formData, setFormData] = useState({});
  

  function addContactHandler(contact) {
    //changing the first character of the first name to a capital and then the remaining characters to a lowercase to unify submissions
    const capitalizedFirstName =
      contact.fname.charAt(0).toUpperCase() +
      contact.fname.slice(1).toLowerCase();
    //changing the first character of the last name to a capital and then the remaining characters to a lowercase to unify submissions  
    const capitalizedLastName =
      contact.lname.charAt(0).toUpperCase() +
      contact.lname.slice(1).toLowerCase();
    //changes the email address entered by user to all lower case letters.
    //Then checks to see if there is a duplicate email address in the database. 
    const lowercaseEmail = contact.email.toLowerCase();
    const contactExists = contacts.some(
      (c) => c.email.toLowerCase() === lowercaseEmail
    );
    //if email entered does not exist then allows user to continue registering. 
    if (!contactExists) {
      const updatedContact = {
        fname: capitalizedFirstName,
        lname: capitalizedLastName,
        email: lowercaseEmail,
      };
      setContacts([...contacts, updatedContact]);
      return true;
    } else {
      //if a duplicate is found in database then gives user an alert stating email already exists.
      window.alert('Duplicate contact found');
      return false;
    }
  }

  //allows for the formData to be imported from the Form.jsx file.
  function updateFormData(formData) {
    setFormData(formData);
  }

  return (
    <div className="appDiv">
      <Form
        addContactHandler={addContactHandler}
        contacts={contacts}
        duplicate={duplicate}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
        updateFormData={updateFormData}
      />
      <ContactInfo formData={formData} />
      <NameList
        contacts={contacts}
        setDuplicate={setDuplicate}
        onContactSelect={(contact) => {
          setDuplicate(true);
          setSelectedContact(contact);
        }}
      />
    </div>
  );
}