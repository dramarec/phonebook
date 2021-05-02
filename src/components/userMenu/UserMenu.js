import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

const styles = {
    wrap: {
        marginLeft: 'auto',
        // display: 'inline-block',
        display: 'flex',
        // flexShrink: '1',
        alignItems: 'center',
        // width: '100px',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};
const initialState = {
    avatar: 'https://icon-library.com/images/lion-595b40b75ba036ed117d858a.svg.svg',
};

const UserMenu = () => {
    const [state] = useState({ ...initialState });

    const isAuth = useSelector(authSelectors.isAuth);
    const name = useSelector(authSelectors.name);

    return (
        <>
            {isAuth && (
                <div style={styles.wrap}>
                    <img src={state.avatar} alt="" width="32" style={styles.avatar} />
                    <span style={styles.name}>Welcome, {name}</span>
                    {/* <button type="button" onClick={signOut}>
                Logout
            </button> */}
                </div>
            )}
        </>
    );
};

export default UserMenu;
