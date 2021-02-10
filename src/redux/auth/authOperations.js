import axios from 'axios';
import {
    setError,
    setLoading,
    signUp,
    addUserName,
    getUserName,
    signOut,
} from './authActions';

const signUpOperations = user => async dispatch => {
    // const idToken = getState();
    dispatch(setLoading());
    try {
        const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
            ...user,
            returnSecureToken: true,
        });
        // console.log('response :', response);

        // eslint-disable-next-line no-unused-vars
        const userResponse = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/users/${response.data.localId}.json?auth=${response.data.idToken}`,
            { name: user.name },
        );
        console.log('userResponse :', userResponse);
        dispatch(addUserName(user.name));

        dispatch(signUp(response.data));
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
        // console.log('response :', response);

        // eslint-disable-next-line no-unused-vars
        const userResponseName = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/users/${response.data.localId}.json?auth=${response.data.idToken}`,
            { name: user.name },
        );
        console.log('userResponseName :', userResponseName.data);

        const userName = Object.values(userResponseName.data);
        console.log('userName :', userName);
        dispatch(getUserName(userName));

        dispatch(signUp(response.data));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading());
    }
};

export { signUpOperations, signInOperations };

// const register = credentials => dispatch => {
//     dispatch(registerRequest());

//     axios
//         .post('/users/signup', credentials)
//         // .post('data.json', credentials)
//         .then(response => {
//             // console.log('response :', response);
//             // token.set(response.data.token);
//             dispatch(registerSuccess(response.data));
//         })
//         .catch(error => dispatch(registerError(error)));
// };

// const logIn = credentials => dispatch => {
//     dispatch(loginRequest());

//     axios
//         .post('/users/login', credentials)
//         .then(response => {
//             token.set(response.data.token);
//             dispatch(loginSuccess(response.data));
//         })
//         .catch(error => dispatch(loginError(error)));
// };

// const getCurrentUser = () => (dispatch, getState) => {
//     const {
//         auth: { token: persistedToken },
//     } = getState();

//     if (!persistedToken) {
//         return;
//     }

//     token.set(persistedToken);
//     dispatch(getCurrentUserRequest());

//     axios
//         .get('/users/current')
//         .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
//         .catch(error => getCurrentUserError(error));
// };

// const logOut = () => dispatch => {
//     dispatch(logoutRequest());

//     axios
//         .post('/users/logout')
//         .then(() => {
//             token.unset();
//             dispatch(logoutSuccess());
//         })
//         .catch(error => dispatch(logoutError(error)));
// };

//==================================
// import axios from 'axios';
// import {
//     registerRequest,
//     registerSuccess,
//     registerError,
//     logoutRequest,
//     logoutSuccess,
//     logoutError,
//     loginRequest,
//     loginSuccess,
//     loginError,
//     getCurrentUserRequest,
//     getCurrentUserSuccess,
//     getCurrentUserError,
// } from './authActions';

// // axios.defaults.baseURL = 'https://lect-98814-default-rtdb.firebaseio.com/';
// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset() {
//         axios.defaults.headers.common.Authorization = '';
//     },
// };

// const register = credentials => dispatch => {
//     dispatch(registerRequest());

//     axios
//         .post('/users/signup', credentials)
//         // .post('data.json', credentials)
//         .then(response => {
//             // console.log('response :', response);
//             // token.set(response.data.token);
//             dispatch(registerSuccess(response.data));
//         })
//         .catch(error => dispatch(registerError(error)));
// };

// const logIn = credentials => dispatch => {
//     dispatch(loginRequest());

//     axios
//         .post('/users/login', credentials)
//         .then(response => {
//             token.set(response.data.token);
//             dispatch(loginSuccess(response.data));
//         })
//         .catch(error => dispatch(loginError(error)));
// };

// const getCurrentUser = () => (dispatch, getState) => {
//     const {
//         auth: { token: persistedToken },
//     } = getState();

//     if (!persistedToken) {
//         return;
//     }

//     token.set(persistedToken);
//     dispatch(getCurrentUserRequest());

//     axios
//         .get('/users/current')
//         .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
//         .catch(error => getCurrentUserError(error));
// };

// const logOut = () => dispatch => {
//     dispatch(logoutRequest());

//     axios
//         .post('/users/logout')
//         .then(() => {
//             token.unset();
//             dispatch(logoutSuccess());
//         })
//         .catch(error => dispatch(logoutError(error)));
// };

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { register, logOut, logIn, getCurrentUser };
