// export const filteredContact = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

export const getContact = state => state.contacts;

export const getFilter = state => state.filter;
