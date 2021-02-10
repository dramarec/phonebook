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
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}.json?auth${idToken}`,
            contacts,
        );
        dispatch(addNewContact({ ...contacts, id: response.data.name }));
    } catch (error) {
        dispatch(setError('addNewContactOperations something went wrong'));
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
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}.json?auth${idToken}`,
        );
        console.log('response contacts:', response.data);

        const contacts = Object.keys(response.data).map(key => ({
            ...response.data[key],
            // id: key,
        }));
        console.log('contacts :', contacts);
        // console.log('response :', response);
        dispatch(getAllContacts(contacts));
    } catch (error) {
        dispatch(setError('getContactOperations something went wrong'));
    } finally {
        dispatch(setLoading());
    }
};
const deleteContactOperations = id => async (dispatch, getState) => {
    const userId = getState().auth.localId;
    dispatch(setLoading());
    try {
        await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}/${id}.json`,
        );
        dispatch(deleteContact(id));
    } catch (error) {
        dispatch(setError('deleteContactOperations error'));
    } finally {
        dispatch(setLoading());
    }
};
const editContactOperations = editedContact => async (dispatch, getState) => {
    const userId = getState().auth.localId;
    dispatch(setLoading());
    try {
        await axios.put(
            `${process.env.REACT_APP_BASE_URL}/contacts/${userId}/${editedContact.id}.json`,
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

// {
//     "rules": {
//         "contacts": {
//         "$uid": {
//           ".read": "$uid === auth.uid",
//          ".write": "$uid === auth.uid"
//         }
//         },
//         "users": {
//          "$uid": {
//           ".read": "$uid === auth.uid",
//          ".write": "$uid === auth.uid"
//         }
//         },

//     }
// }

// {
//     "rules": {
//       ".read": "now < 1614981600000",  // 2021-3-6
//       ".write": "now < 1614981600000",  // 2021-3-6
//     }
//   }

// import axios from 'axios';
// import {
//     addNewContact,
//     setError,
//     setLoading,
//     getAllContacts,
//     deleteContact,
//     editContact,
// } from './contactsActions';

// const addNewContactOperations = contacts => async (dispatch, getState) => {
//     const idToken = getState().auth.idToken;
//     dispatch(setLoading());
//     try {
//         const response = await axios.post(
//             `${process.env.REACT_APP_BASE_URL}/contacts.json?auth${idToken}`,
//             contacts,
//         );
//         dispatch(addNewContact({ ...contacts, id: response.data.name }));
//     } catch (error) {
//         dispatch(setError(error));
//     } finally {
//         dispatch(setLoading());
//     }
// };

// const getContactOperations = () => async (dispatch, getState) => {
//     const idToken = getState().auth.idToken;
//     dispatch(setLoading());
//     try {
//         const response = await axios.get(
//             `${process.env.REACT_APP_BASE_URL}/contacts.json?auth${idToken}`,
//         );
//         const contacts = Object.keys(response.data).map(key => ({
//             ...response.data[key],
//             id: key,
//         }));
//         // console.log('response :', response);
//         dispatch(getAllContacts(contacts));
//     } catch (error) {
//         dispatch(setError(error));
//     } finally {
//         dispatch(setLoading());
//     }
// };
// const deleteContactOperations = id => async dispatch => {
//     dispatch(setLoading());
//     try {
//         await axios.delete(
//             `${process.env.REACT_APP_BASE_URL}/contacts/${id}.json`,
//         );
//         dispatch(deleteContact(id));
//     } catch (error) {
//         dispatch(setError(error));
//     } finally {
//         dispatch(setLoading());
//     }
// };
// const editContactOperations = editedContact => async dispatch => {
//     dispatch(setLoading());
//     try {
//         await axios.put(
//             `${process.env.REACT_APP_BASE_URL}/contacts/${editedContact.id}.json`,
//             editedContact,
//         );
//         dispatch(editContact(editedContact));
//     } catch (error) {
//         dispatch(setError(error));
//     } finally {
//         dispatch(setLoading());
//     }
// };
// export {
//     addNewContactOperations,
//     getContactOperations,
//     deleteContactOperations,
//     editContactOperations,
// };
