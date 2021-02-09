import axios from 'axios';

import {
    addContactSuccess,
    addContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    removeContactsSuccess,
    removeContactsError,
} from './contactsActions';

axios.defaults.baseURL = 'http://localhost:2000';

const addNewContact = payload => dispatch => {
    // console.log('payload :', payload);
    dispatch(fetchContactsRequest());

    axios
        .post('/contacts', { ...payload })
        .then(response => {
            // console.log(response);
            dispatch(addContactSuccess(response.data));
        })
        .catch(error => dispatch(addContactError(error)))
        .finally(() => dispatch(fetchContactsRequest()));
};

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios
        .get('/contacts')
        .then(response => {
            // console.log(response);
            dispatch(fetchContactsSuccess(response.data));
        })
        .catch(error => dispatch(fetchContactsError(error)))
        .finally(() => dispatch(fetchContactsRequest()));
};

const removeContact = id => dispatch => {
    dispatch(fetchContactsRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(() => {
            dispatch(removeContactsSuccess(id));
        })
        .catch(error => dispatch(removeContactsError(error)))
        .finally(() => dispatch(fetchContactsRequest()));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addNewContact, fetchContacts, removeContact };
