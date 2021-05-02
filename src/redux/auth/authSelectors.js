const isAuth = state => state.auth.isAuth;
const name = state => state.auth.name;

const authSelectors = {
    isAuth,
    name,
};

export default authSelectors;
