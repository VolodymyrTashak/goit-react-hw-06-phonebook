import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/contactsSlice';
import { getContact, getFilter } from 'redux/selectors';

import { ContactItem, ContactBtn, ContactInfo } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContact = e => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const formatting = filteredContact();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {formatting.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>{name}</ContactInfo>
          <ContactInfo>{number}</ContactInfo>
          <ContactBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  formatting: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

// import { deleteContact } from 'redux/contactsSlice';
// import { getContact, getFilter } from 'redux/selectors';

// import { ContactItem, ContactBtn, ContactInfo } from './ContactList.styled';

// export const ContactList = () => {
//   const contacts = useSelector(getContact);
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const filteredContact = () => {
//     return contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(filter.toLowerCase());
//     });
//   };

//   let formatting = filter === '' ? contacts : filteredContact();

//   // const normalizedFilter = filter.toLowerCase();
//   // const filteredContact = contacts.filter(contact => {
//   //   return contact.name.toLowerCase().includes(normalizedFilter);
//   // });

//   // const filteredContact = e => {
//   //   const normalizedFilter = filter.toLowerCase();
//   //   return contacts.filter(({ name }) =>
//   //     name.toLowerCase().includes(normalizedFilter)
//   //   );
//   // };
//   // const formatting = filteredContact();

//   const onDeleteContact = contactId => {
//     dispatch(deleteContact(contactId));
//   };

//   return (
//     <ul>
//       {formatting.map(({ name, id, number }) => {
//         return (
//           <ContactItem key={id}>
//             <ContactInfo>{name}</ContactInfo>
//             <ContactInfo>{number}</ContactInfo>
//             <ContactBtn type="button" onClick={() => onDeleteContact(id)}>
//               Delete
//             </ContactBtn>
//           </ContactItem>
//         );
//       })}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   formatting: PropTypes.array,
//   onDeleteContact: PropTypes.func,
// };
