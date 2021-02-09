import { configureStore } from '@reduxjs/toolkit';
import reducerContacts from './contacts/contactsReducer';
// import authReducer from './auth/authReducers';

const store = configureStore({
    reducer: reducerContacts,
});

export default store;
