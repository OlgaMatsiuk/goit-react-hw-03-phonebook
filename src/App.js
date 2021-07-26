import React, { Component } from 'react';
import styles from './App.module.css';
import Form from './Components/Form/Form';
import Contacts from './Components/Contacts/Contacts';
import Filter from './Components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsetContacts = JSON.parse(contacts);

    if (parsetContacts) {
      this.setState({ contacts: parsetContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContact = this.state.contacts;
    const prevContact = prevState.contacts;

    if (nextContact !== prevContact) {
      localStorage.setItem('contacts', JSON.stringify(nextContact));
    }
  }
  formSubmit = data => {
    const savedContacts  = this.state.contacts.find(contact =>
      contact.name.toLowerCase() === data.name.toLowerCase());
  
      if (savedContacts) {
        alert(data.name + ' is already in contacts.');
        return;
        }  
      this.setState(prevState => ({
        contacts: [...prevState.contacts,data],
      }

      ))    
  }

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  deleteContact = (number) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.number !== number),
    }))
    
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
   
    return (
      <div className={styles.container}>
        <Form text="Phonebook" submit={this.formSubmit} />
        <h2 className={styles.contactList}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <Contacts list={filteredContacts} onDeleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;