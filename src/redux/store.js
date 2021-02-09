import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
});
export const persistor = persistStore(store);

export default store;
// console.log('persistor :', persistor);
//----------------------
// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers/rootReducer';

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
//========================
// {
//     "rules": {
//         "tutors": {
//         ".read": true,
//          ".write": true
//         },
//         "students": {
//          ".read": true,
//         ".write": true
//         },
//         "myOwnFolder": {
//          "$uid": {
//           ".read": "$uid === auth.uid",
//          ".write": "$uid === auth.uid"
//         }
//         },
//     "users": {
//      "$user_id": {
//      ".write": "auth !== null && auth.user_id === 'yuY4zi24JadojY4Y6JwlKHUwnof2'"
//     }
//     }
//     }
// }
//=========
//   {
//     "rules": {
//       ".read": "now < 1614981600000",  // 2021-3-6
//       ".write": "now < 1614981600000",  // 2021-3-6
//     }
//   }
