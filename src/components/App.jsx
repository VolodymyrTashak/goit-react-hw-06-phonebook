import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { localStorageGetItem, localStorageSetItem } from 'utils/localeStorage';

import Box from './Box/Box.styled';
import { Text, Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    localStorageGetItem('contacts') ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContact = e => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const addContact = contact => {
    const filters = contacts.map(filter => filter.name);
    if (filters.includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      contact.id = nanoid();
      setContacts([...contacts, contact]);
    }
  };

  const formatting = filterContact();

  useEffect(() => {
    localStorageSetItem('contacts', contacts);
  }, [contacts]);

  return (
    <Box>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Text>Contacts</Text>
      <Filter filter={filter} onFilter={onFilter} />
      <ContactList formatting={formatting} onDeleteContact={deleteContact} />
    </Box>
  );
};
