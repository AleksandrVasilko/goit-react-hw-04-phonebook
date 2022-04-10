import React, { Component } from "react";
import contacts from './contacts.json';
import ContactForm from "./ContactForm";
import ContactsList from './ContactsList';
import Container from "./Container";
import Filter from './Filter';
import shortid from "shortid";

class App extends Component {

  state = {
    contacts: contacts,
    filter: '',
    name: '',
    number: ''
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (!contacts) {
      return;
    }
    this.setState({ contacts: parseContacts });
  }
  
  addContact = (name, number) => {

    const { contacts } = this.state;
		const repeatName = contacts.find(contact => {
			return contact.name.toLowerCase() === name.toLowerCase();
		});
		if (repeatName) {
			alert(`${name} is already in contacts`);
			return;
    }
    
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
  };

  changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    getVisibleTodos = () => {
        const { filter, contacts } = this.state;

        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    deleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }))
    };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleTodos();

    return (
      <Container>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={ this.changeFilter}/>
        
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  };
}
export default App;