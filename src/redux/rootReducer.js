import { combineReducers } from 'redux';
import authReducer from './auth/authReducers';
import contactsReducer from './contacts/contactsReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['email', 'idToken', 'refreshToken', 'isAuth', 'localId'],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    reducerContacts: contactsReducer,
});

export default rootReducer;
