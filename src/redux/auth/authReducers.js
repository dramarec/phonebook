import { SIGNUP, SIGNIN, SIGNOUT, SETERROR, SETLOADING } from './authConstants';

const initialState = {
    email: '',
    idToken: '',
    refreshToken: '',
    isAuth: false,
    isLoading: false,
    localId: '',
    error: '',
};

const authReducer = (state = { ...initialState }, { type, payload }) => {
    switch (type) {
        case SIGNUP:
            return {
                ...state,
                email: payload.email,
                idToken: payload.idToken,
                refreshToken: payload.refreshToken,
                localId: payload.localId,
                isAuth: true,
            };
        case SIGNIN:
            return {
                ...state,
                email: payload.email,
                idToken: payload.idToken,
                refreshToken: payload.refreshToken,
                localId: payload.localId,
                isAuth: true,
            };
        case SIGNOUT:
            return { ...initialState };
        case SETERROR:
            return { ...state, isLoading: !state.isLoading };
        case SETLOADING:
            return { ...state, arror: payload };

        default:
            return state;
    }
};
export default authReducer;
//
//=========================================
// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import {
//     registerSuccess,
//     registerError,
//     logoutSuccess,
//     logoutError,
//     loginSuccess,
//     loginError,
//     getCurrentUserSuccess,
//     getCurrentUserError,
// } from './authActions';

// const initialUserState = { name: null, email: null };

// const user = createReducer(initialUserState, {
//     [registerSuccess]: (_, { payload }) => payload.user,
//     [loginSuccess]: (_, { payload }) => payload.user,
//     [getCurrentUserSuccess]: (_, { payload }) => payload,
//     [logoutSuccess]: () => initialUserState,
// });

// const token = createReducer(null, {
//     [registerSuccess]: (_, { payload }) => payload.token,
//     [loginSuccess]: (_, { payload }) => payload.token,
//     [logoutSuccess]: () => null,
// });

// const error = createReducer(null, {
//     [registerError]: (_, { payload }) => payload,
//     [loginError]: (_, { payload }) => payload,
//     [logoutError]: (_, { payload }) => payload,
//     [getCurrentUserError]: (_, { payload }) => payload,
// });

// export default combineReducers({
//     user,
//     token,
//     error,
// });
