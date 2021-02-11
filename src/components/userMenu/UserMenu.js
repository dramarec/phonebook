import React /* , { useState } */ from 'react';
import { useSelector } from 'react-redux';

const styles = {
    container: {
        marginLeft: '140px',
        display: 'inline-block',
        // display: 'flex',
        // flexShrink: '1',
        // alignItems: 'center',
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
// const initialState = {
//     avatar:
//         'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
// };

const UserMenu = () => {
    // const [state, setState] = useState({ ...initialState });
    const isAuth = useSelector(state => state.auth.isAuth);
    const name = useSelector(state => state.auth.name);
    // console.log('name :', name);

    return (
        <>
            {isAuth && (
                <div style={styles.container}>
                    {/* <img
                        src={state.avatar}
                        alt=""
                        width="32"
                        style={styles.avatar}
                    /> */}
                    <span style={styles.name}>Welcome {name}</span>
                    {/* <button type="button" onClick={signOut}>
                Logout
            </button> */}
                </div>
            )}
        </>
    );
};

export default UserMenu;
//=====================================
// import React from 'react';
// import { connect } from 'react-redux';
// // import { signOut } from '../../redux/auth/authActions';
// // import { getUserName } from '../../redux/auth/authSelectors';
// // import { signOut } from '../../redux/auth/authActions';

// const styles = {
//     container: {
//         display: 'flex',
//         alignItems: 'center',
//     },
//     avatar: {
//         marginRight: 4,
//     },
//     name: {
//         fontWeight: 700,
//         marginRight: 12,
//     },
// };

// const UserMenu = ({ avatar, name, signOut }) => {
//     // const onLogout = () => {
//     //     dispatch(signOut());
//     // };
//     return (
//         <div style={styles.container}>
//             <img src={avatar} alt="" width="32" style={styles.avatar} />
//             <span style={styles.name}>Welcome, {name}</span>
//             {/* <button type="button" onClick={signOut}>
//                 Logout
//             </button> */}
//         </div>
//     );
// };
// const mapStateToProps = state => {
//     // console.log('state :', state);
//     return {
//         name: state.auth.name,
//         // name: getUserName(state),
//         // avatar:
//         //     'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
//     };
// };

// // export default UserMenu;
// export default connect(mapStateToProps /* , { signOut: signOut } */)(UserMenu);
