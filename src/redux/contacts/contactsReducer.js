import { createReducer } from '@reduxjs/toolkit';

import {
    addNewContact,
    deleteContact,
    editContact,
    setFilter,
    setAlert,
    getAllContacts,
    setLoading,
    setError,
} from './contactsActions';

const initialState = {
    contacts: [],
    filter: '',
    showEmptyAlert: false,
    showUsedAlert: false,
    loading: false,
    setError: '',
};

const contactsReducer = createReducer(
    { ...initialState },
    {
        [addNewContact]: (state, action) => {
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        },

        [getAllContacts]: (state, action) => ({
            ...state,
            contacts: [...action.payload],
        }),

        [deleteContact]: (state, action) => ({
            ...state,
            contacts: [
                ...state.contacts.filter(
                    contact => contact.id !== action.payload,
                ),
            ],
        }),
        [editContact]: (state, action) => ({
            ...state,
            contacts: [
                ...state.contacts.map(contact =>
                    contact.id === action.payload.id
                        ? { ...action.payload }
                        : contact,
                ),
            ],
        }),
        [setFilter]: (state, action) => ({
            ...state,
            filter: action.payload,
        }),
        [setAlert]: state => ({
            ...state,
            showEmptyAlert: false,
            showUsedAlert: false,
        }),

        [setLoading]: state => ({
            ...state,
            loading: !state.loading,
        }),
        [setError]: state => ({
            ...state,
            setError: state.payload,
        }),
    },
);

export default contactsReducer;
