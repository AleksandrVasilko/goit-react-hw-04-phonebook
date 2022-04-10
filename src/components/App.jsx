import { useState, useEffect } from 'react';
import useLocaleStorage from '../hooks/localStorage'
import contactsEl from './contacts.json';
import ContactForm from "./ContactForm";
import ContactsList from './ContactsList';
import Container from "./Container";
import Filter from './Filter';
import shortid from "shortid";

export default function App () {
  const [contacts, setContacts] = useLocaleStorage('contact', contactsEl);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    localStorage.setItem('contact', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = ({ name, number }) => {
		const repeatName = contacts.find(contact => {
			return contact.name.toLowerCase() === name.toLowerCase();
		});
		if (repeatName) {
			alert(`${name} is already in contacts`);
			return;
    }
    
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prev => {
      return[contact, ...prev]
    })
  };

  const changeFilter = event => {
        setFilter( event.currentTarget.value );
    };

  const normalizedFilter = filter.toLowerCase();
    
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  

    const deleteContact = contactId => {
      setContacts(prev => prev.filter(contact => contact.id !== contactId))    
    };

    return (
      <Container>
        <ContactForm onSubmit={addContact} />
        <Filter value={filter} onChange={ changeFilter}/>
        
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Container>
    );
  };

