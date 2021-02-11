import axios from 'axios';
import {
    addNewContact,
    setError,
    setLoading,
    getAllContacts,
    deleteContact,
    editContact,
} from './contactsActions';

const addNewContactOperations = contacts => async (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    const userId = getState().auth.localId;
    dispatch(setLoading());
    // axios.defaults.headers.common['Authorization'] = idToken;
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}.json?auth=${idToken}`,
            contacts,
        );
        dispatch(addNewContact({ ...contacts, id: response.data.name }));
    } catch (error) {
        dispatch(setError('addNewContactOperations error'));
    } finally {
        dispatch(setLoading());
    }
};

const getContactOperations = () => async (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    const userId = getState().auth.localId;
    dispatch(setLoading());
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}.json?auth=${idToken}`,
        );

        const contacts = response.data
            ? Object.keys(response.data).map(key => ({
                  ...response.data[key],
                  id: key,
              }))
            : [];

        dispatch(getAllContacts(contacts));
    } catch (error) {
        dispatch(setError('getContactOperations error'));
    } finally {
        dispatch(setLoading());
    }
};
const deleteContactOperations = id => async (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    const userId = getState().auth.localId;
    dispatch(setLoading());
    try {
        await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}/${id}.json?auth=${idToken}`,
        );
        dispatch(deleteContact(id));
    } catch (error) {
        dispatch(setError('deleteContactOperations error'));
    } finally {
        dispatch(setLoading());
    }
};
const editContactOperations = editedContact => async (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    const userId = getState().auth.localId;
    dispatch(setLoading());
    try {
        await axios.put(
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}/${editedContact.id}.json?auth=${idToken}`,
            editedContact,
        );
        dispatch(editContact(editedContact));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading());
    }
};
export {
    addNewContactOperations,
    getContactOperations,
    deleteContactOperations,
    editContactOperations,
};
