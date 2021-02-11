import axios from 'axios';
import {
    setError,
    setLoading,
    signUp,
    getUserName,
    signOut,
    signIn,
} from './authActions';

const signUpOperations = user => async dispatch => {
    dispatch(setLoading());
    try {
        const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
            ...user,
            returnSecureToken: true,
        });
        // eslint-disable-next-line
        const userResponseName = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/users/${response.data.localId}.json?auth=${response.data.idToken}`,
            { name: user.name },
        );
        // console.log('userResponseName :', userResponseName);
        // const userName = Object.keys(userResponseName.data).map(key => ({
        //     ...userResponseName.data[key],
        // }))[0].name;
        // console.log(user.name);
        dispatch(signUp({ ...response.data, name: user.name }));
    } catch (error) {
        dispatch(setError(error));
        dispatch(signOut());
    } finally {
        dispatch(setLoading());
    }
};
const signInOperations = user => async dispatch => {
    dispatch(setLoading());
    try {
        const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
            ...user,
            returnSecureToken: true,
        });

        const userResponseName = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/users/${response.data.localId}.json?auth=${response.data.idToken}`,
        );
        const userName = Object.keys(userResponseName.data).map(key => ({
            ...userResponseName.data[key],
        }))[0].name;

        dispatch(getUserName(userName));

        dispatch(signIn({ ...response.data, name: userName }));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading());
    }
};

export { signUpOperations, signInOperations };
