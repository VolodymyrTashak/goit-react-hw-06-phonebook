import React, { useState } from 'react';

import { FormLabel, FormBtn, Form } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const onInputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <FormLabel>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputChange}
        />
      </FormLabel>

      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import { addContact } from 'redux/contactsSlice';

// import { FormLabel, FormBtn, Form } from './ContactForm.styled';

// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const dispatch = useDispatch();

//   const onFormSubmit = e => {
//     e.preventDefault();
//     dispatch(addContact({ name, number }));
//     resetForm();
//     // const contactFind = contacts.find(
//     //   contact => contact.name.toLowerCase() === name.toLowerCase()
//     // );
//     // if (contactFind) {
//     //   return;
//     // }
//     // const contact = {
//     //   id: nanoid(),
//     //   name,
//     //   number,
//     // };
//     // dispatch(addContact(contact));
//     // resetForm();
//   };

//   const resetForm = () => {
//     setName('');
//     setNumber('');
//   };

//   const onInputChange = e => {
//     switch (e.currentTarget.name) {
//       case 'name':
//         setName(e.currentTarget.value);
//         break;
//       case 'number':
//         setNumber(e.currentTarget.value);
//         break;
//       default:
//         return;
//     }
//   };

//   return (
//     <Form onSubmit={onFormSubmit}>
//       <FormLabel>
//         Name
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={onInputChange}
//         />
//       </FormLabel>
//       <FormLabel>
//         Number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           onChange={onInputChange}
//         />
//       </FormLabel>

//       <FormBtn type="submit">Add contact</FormBtn>
//     </Form>
//   );
// };
