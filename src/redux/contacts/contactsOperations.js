import axios from 'axios';
import contactsActions from './contactsActions';

const addNewContactOperations = contacts => async (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    const userId = getState().auth.localId;
    dispatch(contactsActions.setLoading());
    // axios.defaults.headers.common['Authorization'] = idToken;
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}.json?auth=${idToken}`,
            contacts,
        );
        dispatch(
            contactsActions.addNewContact({
                ...contacts,
                id: response.data.name,
            }),
        );
    } catch (error) {
        dispatch(contactsActions.setError('addNewContactOperations error'));
    } finally {
        dispatch(contactsActions.setLoading());
    }
};

const getContactOperations = () => async (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    const userId = getState().auth.localId;
    dispatch(contactsActions.setLoading());
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

        dispatch(contactsActions.getAllContacts(contacts));
    } catch (error) {
        dispatch(contactsActions.setError('getContactOperations error'));
    } finally {
        dispatch(contactsActions.setLoading());
    }
};

const deleteContactOperations = id => async (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    const userId = getState().auth.localId;
    dispatch(contactsActions.setLoading());
    try {
        await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}/${id}.json?auth=${idToken}`,
        );
        dispatch(contactsActions.deleteContact(id));
    } catch (error) {
        dispatch(contactsActions.setError('deleteContactOperations error'));
    } finally {
        dispatch(contactsActions.setLoading());
    }
};

const editContactOperations = editedContact => async (dispatch, getState) => {
    const idToken = getState().auth.idToken;
    const userId = getState().auth.localId;
    dispatch(contactsActions.setLoading());
    try {
        await axios.put(
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}/${editedContact.id}.json?auth=${idToken}`,
            editedContact,
        );
        dispatch(contactsActions.editContact(editedContact));
    } catch (error) {
        dispatch(contactsActions.setError(error));
    } finally {
        dispatch(contactsActions.setLoading());
    }
};

export {
    addNewContactOperations,
    getContactOperations,
    deleteContactOperations,
    editContactOperations,
};
