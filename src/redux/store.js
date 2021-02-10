import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
// import reducerContacts from './contacts/contactsReducer';
// import authReducer from './auth/authReducers';

const store = configureStore({
    reducer: rootReducer,
});

export default store;
