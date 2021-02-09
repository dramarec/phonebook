import { configureStore } from '@reduxjs/toolkit';
import reducerContacts from './contacts/contactsReducer';
import authReducer from './auth/authReducers';

const store = configureStore({
    reducer: reducerContacts,
});
// const store = configureStore({
//     reducer: {
//         phonebook: reducerContacts,
//         auth: authReducer,
//     },
// });

export default store;
