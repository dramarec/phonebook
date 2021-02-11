import {
    SIGNUP,
    SIGNIN,
    SIGNOUT,
    SETERROR,
    SETLOADING,
    SETNAME,
    GETNAME,
} from './authConstants';

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

const authReducer = (state = { ...initialState }, { type, payload }) => {
    switch (type) {
        case GETNAME:
            return {
                ...state,
                name: type.name,
            };
        case SETNAME:
            return {
                ...state,
                name: type.name,
            };
        case SIGNUP:
            return {
                ...state,
                name: payload.name,
                email: payload.email,
                idToken: payload.idToken,
                refreshToken: payload.refreshToken,
                localId: payload.localId,
                isAuth: true,
            };
        case SIGNIN:
            return {
                ...state,
                name: payload.name,
                email: payload.email,
                idToken: payload.idToken,
                refreshToken: payload.refreshToken,
                localId: payload.localId,
                isAuth: true,
            };
        case SIGNOUT:
            return { ...initialState };
        case SETLOADING:
            return { ...state, isLoading: !state.isLoading };
        case SETERROR:
            return { ...state, error: payload };

        default:
            return state;
    }
};
export default authReducer;
