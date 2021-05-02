import { createSelector } from '@reduxjs/toolkit';

const error = state => state.phonebook.error;
const setLoading = state => state.phonebook.loading;

const showUsedAlert = state => state.phonebook.showUsedAlert;
const showEmptyAlert = state => state.phonebook.showEmptyAlert;

const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;

const contactsFilter = createSelector([getContacts, getFilter], (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
});
// const contactsFilter = state =>
//     state.contacts.contacts.filter(contact =>
//         contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
//     );

const contactsSelectors = {
    error,
    setLoading,

    showUsedAlert,
    showEmptyAlert,

    getContacts,
    getFilter,
    contactsFilter,
};
export default contactsSelectors;
