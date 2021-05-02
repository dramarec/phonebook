import axios from 'axios';
import authActions from './authActions';

const signUpOperations = user => async dispatch => {
    dispatch(authActions.setLoading());
    try {
        const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
            ...user,
            returnSecureToken: true,
        });
        await axios.post(
            `${process.env.REACT_APP_BASE_URL}/users/${response.data.localId}.json?auth=${response.data.idToken}`,
            { name: user.name },
        );
        dispatch(authActions.signUp({ ...response.data, name: user.name }));
    } catch (error) {
        dispatch(authActions.setError(error));
        dispatch(authActions.signOut());
    } finally {
        dispatch(authActions.setLoading());
    }
};

const signInOperations = user => async dispatch => {
    dispatch(authActions.setLoading());
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

        dispatch(authActions.getUserName(userName));
        dispatch(authActions.signIn({ ...response.data, name: userName }));
    } catch (error) {
        dispatch(authActions.setError(error));
    } finally {
        dispatch(authActions.setLoading());
    }
};

export { signUpOperations, signInOperations };
