import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
import contactsReducer from './contacts/contactsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    reducerContacts: contactsReducer,
});

export default rootReducer;
