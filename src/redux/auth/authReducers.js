import { createReducer } from '@reduxjs/toolkit';
import authActions from './authActions';

const initialState = {
    name: '',
    email: '',
    idToken: '',
    localId: '',
    refreshToken: '',
    isAuth: false,
    isLoading: false,
    error: '',
};

const authReducer = createReducer(
    { ...initialState },
    {
        [authActions.signUp]: (state, { payload }) => ({
            ...state,
            name: payload.name,
            email: payload.email,
            idToken: payload.idToken,
            refreshToken: payload.refreshToken,
            localId: payload.localId,
            isAuth: true,
        }),
        [authActions.signIn]: (state, { payload }) => ({
            ...state,
            name: payload.name,
            email: payload.email,
            idToken: payload.idToken,
            refreshToken: payload.refreshToken,
            localId: payload.localId,
            isAuth: true,
        }),
        [authActions.signOut]: (_, action) => ({
            ...initialState,
        }),
        [authActions.setLoading]: (state, { payload }) => ({
            ...state,
            isLoading: !state.isLoading,
        }),
        [authActions.setError]: (state, { payload }) => ({
            ...state,
            error: payload,
        }),
        [authActions.addUserName]: (state, { payload }) => ({
            ...state,
            name: payload.name,
        }),
        [authActions.getUserName]: (state, { payload }) => ({
            ...state,
            name: payload.name,
        }),
    },
);

export default authReducer;
