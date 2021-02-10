const getShowUsedAlert = state =>
    state.reducerContacts.reducerContacts.showUsedAlert;
const getShowEmptyAlert = state =>
    state.reducerContacts.reducerContacts.showEmptyAlert;
const getContacts = state =>
    state.reducerContacts.reducerContacts.contacts.filter(contact =>
        contact.name
            .toLowerCase()
            .includes(
                state.reducerContacts.reducerContacts.filter.toLowerCase(),
            ),
    );
const getFilter = state => state.reducerContacts.reducerContacts.filter;
const getLoading = state => state.reducerContacts.reducerContacts.loading;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getShowUsedAlert,
    getShowEmptyAlert,
    getContacts,
    getFilter,
    getLoading,
};
