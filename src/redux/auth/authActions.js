import {
    SIGNIN,
    SIGNOUT,
    SIGNUP,
    SETLOADING,
    SETERROR,
    SETNAME,
    GETNAME,
} from './authConstants';

const signUp = user => ({ type: SIGNUP, payload: user });
const signIn = user => ({ type: SIGNIN, payload: user });
const signOut = () => ({ type: SIGNOUT });
const setLoading = () => ({ type: SETLOADING });
const setError = error => ({ type: SETERROR, payload: error });
const addUserName = user => ({ type: SETNAME, payload: user });
const getUserName = user => ({ type: GETNAME, payload: user });

export {
    addUserName,
    getUserName,
    signUp,
    signIn,
    signOut,
    setLoading,
    setError,
};
