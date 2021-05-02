import { createAction } from '@reduxjs/toolkit';

const signUp = createAction('@auth/SignUp');
const signIn = createAction('@auth/SignIn');
const signOut = createAction('@auth/SignOut');
const setLoading = createAction('@auth/SetLoading');
const setError = createAction('@auth/SetError');
const addUserName = createAction('@auth/addUserName');
const getUserName = createAction('@auth/getUserName');

const authActions = {
    signUp,
    signIn,
    signOut,
    setLoading,
    setError,
    addUserName,
    getUserName,
};

export default authActions;
