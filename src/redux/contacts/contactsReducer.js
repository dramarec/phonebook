import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contactsActions';

const initialState = {
    contacts: [],
    filter: '',
    showEmptyAlert: false,
    showUsedAlert: false,
    loading: false,
    error: '',
};

const contactsReducer = createReducer(
    { ...initialState },
    {
        [contactsActions.addNewContact]: (state, action) => {
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        },

        [contactsActions.getAllContacts]: (state, action) => ({
            ...state,
            contacts: [...action.payload],
        }),

        [contactsActions.deleteContact]: (state, action) => ({
            ...state,
            contacts: [
                ...state.contacts.filter(
                    contact => contact.id !== action.payload,
                ),
            ],
        }),
        [contactsActions.editContact]: (state, action) => ({
            ...state,
            contacts: [
                ...state.contacts.map(contact =>
                    contact.id === action.payload.id
                        ? { ...action.payload }
                        : contact,
                ),
            ],
        }),
        [contactsActions.setFilter]: (state, action) => ({
            ...state,
            filter: action.payload,
        }),
        [contactsActions.setAlert]: state => ({
            ...state,
            showEmptyAlert: false,
            showUsedAlert: false,
        }),

        [contactsActions.setLoading]: state => ({
            ...state,
            loading: !state.loading,
        }),
        [contactsActions.setError]: (state, action) => ({
            ...state,
            error: action.payload,
        }),
        [contactsActions.signOutAction]: () => ({
            ...initialState,
        }),
    },
);

export default contactsReducer;
