
import { ContactForm } from './ContactForm/ContactForm'
import { nanoid } from 'nanoid'
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useState, useEffect } from 'react';


const useLocalStorage = (key, defaultValue) => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(contacts));
  }, [key, contacts]);

  return [contacts, setContacts];
}

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addUserContact = ({ name, number }) => {
    const userContact = {
      name,
      number,
      id: nanoid()
    }

    setContacts(prevState => [...prevState, userContact],
    );
  }


  const deleteUserContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  }

  const handleFilterChange = (e) => {
    const { value } = e.target
    setFilter(value)
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase()))

  return <div>
    <h1>Phonebook</h1>

    <ContactForm contacts={contacts} addUserContact={addUserContact} />

    <h1>Contacts</h1>

    <Filter filter={filter} onFilterChange={handleFilterChange} />

    <ContactList filteredContacts={filteredContacts} onDeleteContact={deleteUserContact} />
  </div>
}


